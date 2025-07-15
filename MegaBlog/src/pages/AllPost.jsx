import React, { useEffect, useState } from 'react'
import services from '../Appwrite/config'
import { Postcard } from '../Components'
import Container from '../Components/container/Container'

function AllPost() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        services.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <Container>
                <div className="text-center py-8">
                    Loading posts...
                </div>
            </Container>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                {posts.length === 0 ? (
                    <div className="text-center py-8">
                        No posts found
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {posts.map((post) => (
                            <Postcard key={post.$id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPost