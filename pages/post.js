import Image from "next/image"
import Link from "next/link"
import Paragraph from "./components/paragraph"
const Post = () => {

    return (
        <>
            <section>
                <div className="h-40 w-auto bg-neutral-800">
                    <h1 className="text-center text-white text-2xl lg:text-4xl pt-20 ">What is a Blockchain?</h1>
                </div>
                <div className="flex flex-col lg:flex-row mx-10 my-5 lg:my-20">
                    <div className="lg:w-1/2">
                        <Image src="/securing.svg" alt="blog_left" height="300" width="500" />
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-left text-xl lg:text-2xl text-orange-500">What Is a Blockchain?</h1>
                        <p className="mt-10 text-left text-xl indent-8 font-light leading-relaxed lg:leading-loose">A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.</p> <p className="lg:-mt-8 lg:ml-40 lg:pl-5"><Link href={{
                            pathname: '/post_part'
                        }}><a className="cursor-pointer text-xl text-indigo-400"> Read more about blockchain.</a></Link></p>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Post