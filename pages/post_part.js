import Heading from "./components/heading"
import Paragraph from "./components/paragraph"

const Post_part = () => {
    return (
        <section className="flex">
            <div className=" flex flex-col lg:flex-row h-40 w-auto bg-neutral-800">
                <div className="flex lg:w-1/2 lg:my-40 mx-5 pt-40 lg:pt-0 lg:pl-20 lg:mx-10">
                    <div className=" mt-10 h-16 w-16 bg-orange-400 rounded-lg">
                        <p className="text-center text-3xl my-5">S</p>
                    </div>
                    <div className="pl-5">
                        <div className="pt-12 text-lg">By Silvia Chain</div>
                        <div className="text-lg text-gray-500">{new Date().getDate() + '-' + (new Date().getMonth()) + '-' + new Date().getFullYear()}</div>
                    </div>
                    <div>

                    </div>

                </div>
                <div className="lg:w-1/2 my-40 mx-5 lg:mx-10">

                    <Heading text="Difference between" />
                    <Paragraph text="One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled." />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Heading text="Database structures" />
                    <Paragraph text="A database usually structures its data into tables, whereas a blockchain, as its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible timeline of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this timeline. Each block in the chain is given an exact timestamp when it is added to the chain." />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Heading text="How Does a Blockchain Work?" className="text-black" />
                    <Paragraph text="The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT)." />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Paragraph text="First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts." />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <div className="w-auto h-auto bg-gray-50 -ml-12">
                        <div className="pt-5"></div>

                        <div className="ml-12">
                            <Heading text="Blockchain Decentralization" />
                            <Paragraph text="Imagine that a company owns a server farm with 10,000 computers used to maintain a database holding all of its client’s account information. This company owns a warehouse building that contains all of these computers under one roof and has full control of each of these computers and all of the information contained within them. This, however, provides a single point of failure. What happens if the electricity at that location goes out? What if its Internet connection is severed? What if it burns to the ground? What if a bad actor erases everything with a single keystroke? In any case, the data is lost or corrupted." />
                            <Paragraph text="What a blockchain does is to allow the data held in that database to be spread out among several network nodes at various locations. This not only creates redundancy but also maintains the fidelity of the data stored therein—if somebody tries to alter a record at one instance of the database, the other nodes would not be altered and thus would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information. This system helps to establish an exact and transparent order of events. This way, no single node within the network can alter information held within it." />
                            <Paragraph text="Because of this, the information and history (such as of transactions of a cryptocurrency) are irreversible. Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for a blockchain to hold a variety of other information like legal contracts, state identifications, or a company’s product inventory." />
                        </div>
                    </div>
                    <div className="">
                        <Heading text="Transparency" />
                        <Paragraph text="Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes. " />
                        <div className="border-b border-gray-300 mt-10"></div>

                        <Paragraph text="For example, exchanges have been hacked in the past, where those who kept Bitcoin on the exchange lost everything. While the hacker may be entirely anonymous, the Bitcoins that they extracted are easily traceable. If the Bitcoins stolen in some of these hacks were to be moved or spent somewhere, it would be known." />
                        <div className="border-b border-gray-300 mt-10"></div>

                        <Paragraph text="Of course, the records stored in the Bitcoin blockchain (as well as most others) are encrypted. This means that only the owner of a record can decrypt it to reveal their identity (using a public-private key pair). As a result, users of blockchains can remain anonymous while preserving transparency." />
                        <div className="border-b border-gray-300 mt-10"></div>

                    </div>

                    <Heading text="Is Blockchain Secure?" />
                    <Paragraph text="Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned timestamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, then the hash code changes as well." />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Paragraph text="Let’s say that a hacker, who also runs a node on a blockchain network, wants to alter a blockchain and steal cryptocurrency from everyone else. If they were to alter their own single copy, it would no longer align with everyone else’s copy. When everyone else cross-references their copies against each other, they would see this one copy stand out, and that hacker’s version of the chain would be cast away as illegitimate. " />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Paragraph text="Succeeding with such a hack would require that the hacker simultaneously control and alter 51% or more of the copies of the blockchain so that their new copy becomes the majority copy and, thus, the agreed-upon chain. Such an attack would also require an immense amount of money and resources, as they would need to redo all of the blocks because they would now have different timestamps and hash codes. " />
                    <div className="border-b border-gray-300 mt-10"></div>
                    <Paragraph text="Due to the size of many cryptocurrency networks and how fast they are growing, the cost to pull off such a feat probably would be insurmountable. This would be not only extremely expensive but also likely fruitless. Doing such a thing would not go unnoticed, as network members would see such drastic alterations to the blockchain. The network members would then hard fork off to a new version of the chain that has not been affected. This would cause the attacked version of the token to plummet in value, making the attack ultimately pointless, as the bad actor has control of a worthless asset. The same would occur if the bad actor were to attack the new fork of Bitcoin. It is built this way so that taking part in the network is far more economically incentivized than attacking it. " />
                    <div className="border-b border-gray-300 mt-10"></div>

                </div>

            </div>
        </section>

    )
}

export default Post_part