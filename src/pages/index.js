import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import cloud from '../../public/cloudicon.svg' 
import profilepic from '../../website images/AI-generated-image-removebg.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>YungJun Website</title>
        <meta name="description" content="Yung Jun's Website created by Next JS" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilepic} alt="Yung Jun AI Generated Image" className='w-full h-auto' />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Crafting solutions, floating in the cloud" className="!text-5xl text-left" />

              <p className="my-4 text-base font-small ">
                As a solutions architect, I strive to come out with the best solutions that meet the customer need while migrating to the cloud</p>

              <div className="flex items-center self-start mt-2">

                <Link href="https://drive.google.com/file/d/1hDm89yfzFXzTNV2w9GLmO890kELoO0ns/view?usp=drivesdk" target="_blank"
                  className="flex items-center bg-dark text-light p-1 px-4 rounded-lg text-base font-semibold
                hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2">Resume

                  <LinkArrow className="w-5 ml-1" />
                </Link>

                <Link href="mailto:razoralexjun0112@gmail.com" target="_blank"
                  className="ml-4 text-base font-small capitalize text-dark underline">Email Me</Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        {/* <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={cloud} className='w-full h-auto' />
        </div> */}
      </main>
    </>
  )
}
