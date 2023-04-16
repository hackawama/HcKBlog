import { Client } from '@notionhq/client';
import { PostMetadata } from "./PostMetadata"
import { parse } from 'date-fns';

const client = new Client({
    auth: process.env.NOTION_KEY,
});

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




const pageTOpost = (page: any): PostMetadata => {
    return {
        id: page.id,
        title: page.properties.Title.title[0].plain_text,
        createdAt: stringToDate(page.last_edited_time),
        category: page.properties.Category.multi_select[0].name,
        intention: page.properties.Intention.select.name,
        description: page.properties.description.rich_text[0].plain_text
    }
}

const stringToDate = (date: string): string => {
    const dateDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date());
    return dateDate.toUTCString()
}

export {
    getPosts,

}