import SiteLayout from "../components/SiteLayout"
import React from "react"
import {posts} from "../content/posts"
import {Content} from "../components/Content"

const Blog = () => {
    return (
        <SiteLayout>
            <main className="container py-10 lg:py-16">
                <h2 className="mb-8">Blog</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        posts.map((c) => <div key={c.link}><Content content={c}/>
                        </div>)
                    }
                </div>
            </main>
        </SiteLayout>
    )
}

export default Blog