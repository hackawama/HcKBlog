import { Client } from '@notionhq/client';
import { PostMetadata } from "./PostMetadata"
import { parse } from 'date-fns';
import { NotionToMarkdown } from "notion-to-md"
// create the notion Client
const client = new Client({
    auth: process.env.NOTION_KEY,
});
const n2m = new NotionToMarkdown({
    notionClient: client
})
// Get All published Posts
async function getPosts(): Promise<PostMetadata[]> {

    try {
        let myPosts = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "Status",
                select: {
                    equals: "Published"
                }
            }
        });
        return myPosts.results.map(page => pageTOpost(page))
    } catch (error) {
        console.log(error)
        return []
    }

}
//get a POST by ..

async function getPost(id: string) {

    try {
        let myPosts = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "link",
                formula: {
                    string: {
                        equals: id
                    }

                }
            }
        });

        if (!myPosts.results[0]) {
            throw "no results found"
        }

        const page = await n2m.pageToMarkdown((myPosts.results[0].id))
        const markdown = n2m.toMarkdownString(page)
        const post = pageTOpost(myPosts.results[0])
        return {
            post, markdown
        }

    } catch (error) {
        console.log(error)
        return null
    }

}

const pageTOpost = (page: any): PostMetadata => {
    return {
        id: page.id,
        title: page.properties.Title.title[0].plain_text,
        createdAt: stringToDate(page.last_edited_time),
        category: page.properties.Category.multi_select[0].name,
        intention: page.properties.Intention.select.name,
        description: page.properties.description.rich_text[0].plain_text,
        link: page.properties.link.rich_text[0].plain_text
    }
}

const stringToDate = (date: string): string => {
    const dateDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date());
    return dateDate.toUTCString()
}

export {
    getPosts,
    getPost
}