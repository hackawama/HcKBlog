
import { getPost } from '@/lib/notion';
import Markdown from 'markdown-to-jsx';

async function Postpage(props: any) {

    const result = await getPost(props.params.slug)

    return (
        <div>
            {result ?
                <div className='m-5 flex flex-col justify-center items-center'>
                    <div className='lg:text-center md:text-center'>
                        <h2 className='md:text-5xl text-4xl font-extrabold '>{result.post.title}</h2>
                        <span className='text-xs text-gray-500'>{result.post.createdAt}</span>
                    </div>
                    <article className='prose lg:prose-xl '><Markdown children={result.markdown} /></article>
                </div> : <h2 className='md:text-5xl text-4xl font-extrabold '>Check Your Internet Connexion!</h2>}
        </div>

    )
}

export default Postpage