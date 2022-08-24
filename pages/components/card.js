import Image from "next/image"
import Link from 'next/link'
const Card = () => {
    return (
        <Link href={{
            pathname: '/post',
            query: { name: 'blockchain' },
        }}><a className="cursor-pointer">

                <section className="flex-auto lg:flex h-auto lg:h-96 w-auto lg:ml-28 ml-5 mr-5 lg:mr-28 lg:mt-28 mt-10 border-2 bg-white hover:bg-blue-500 hover:text-white lg:hover:mt-24 hover:mt-8 hover:border-2">

                    <div className="w-full relative" style={{ objectFit: "cover" }}>
                        <Image
                            src="/blockchain1.jpeg"
                            alt="Blockchain image"
                            height="300"
                            width="500"
                            className="rounded-br-lg"

                        />

                    </div>
                    <div className="mr-20 ml-10 relative">
                        <p className="mt-5">{new Date().getDate() + '-' + (new Date().getMonth()) + '-' + new Date().getFullYear()}</p>
                        <h1 className="text-3xl font-medium tracking-wide mt-3">What is a Blockchain?</h1>
                        <p className="mt-5 mb-5">A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.</p>
                        <p className="lg:mt-[2rem]  lg:text-lg lg:mb-5 lg:-ml-[28rem] lg:absolute lg:bottom-0 lg:left-0">By investopedia.com</p>
                        <p className=" lg:mb-5 mt-20 lg:text-lg absolute bottom-0 right-0">Read More</p>

                    </div>

                </section></a>
        </Link>
    )
}

export default Card