import { useState } from 'react'
import Link from 'next/link'
import {
  Tab,
  TabItems,
  TabToggle,
  TabPanel,
  Accordion,
  AccordionContent,
  AccordionCollapse,
  AccordionToggle,
} from '@src/components'

const IndexTabData = [
  {
    tab: 'VerusID',
    imgSrc: 'verusid-tab-icon.svg',
    imgAlt: 'VerusID Icon',
    title: 'Self-Sovereign & Decentralized Identities',
    description:
      'Introducing VerusID; an identity protocol with advanced capabilities, including friendly, human-readable names to receive, send and secure all cryptocurrencies.',
    btnLink: '/technology/verusID',
  },
  {
    tab: 'Decentralized Finance',
    imgSrc: 'currencies-tab-icon.svg',
    imgAlt: 'DeFi Icon',
    title: 'Redefining DeFi With Reserve Currencies',
    description:
      'Simultaneous parallel processing of DeFi transactions allows Verus to advance the technology underpinning automated market makers and community liquidity.',
    btnLink: '/technology/currencies',
  },
  {
    tab: 'Public Blockchains as a Service',
    imgSrc: 'pbaas-tab-icon.svg',
    imgAlt: 'Pbaas Icon',
    title: 'A Blockchain Launch Is Just a Few Clicks Away',
    description:
      'Launch your own blockchain with customizable specifications, while using Verus infrastructure for security and continuity. PBaaS provides a roadmap for practically unlimited scalability.',
    btnLink: '/technology/PbaaS',
  },
  {
    tab: 'Bridges',
    imgSrc: 'bridge-tab-icon.svg',
    imgAlt: 'Bridge Icon',
    title: 'Bridges to Other Cryptocurrencies',
    description:
      'Through decentralized bridges, other cryptocurrencies are represented as tokens on the Verus blockchain.',
    btnLink: '/technology/bridges',
  },
]

const IndexTabContent = (props) => {
  const { imgSrc, imgAlt, title, description, btnLink } = props
  return (
    <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
      <div className="flex flex-col items-center justify-center pt-2 mb-4 text-center md:flex-row md:text-right">
        <img src={`/images/icons/tab/${imgSrc}`} width="181" alt={imgAlt} />
      </div>
      <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
        <div className="max-w-xl">
          <h3 className="mt-0 mb-6 font-normal md:text-2xl">{title}</h3>
          <p className="leading-relaxed">{description}</p>
          <Link href={btnLink}>
            <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const IndexTab = () => {
  const [activeEventKey, setActiveEventKey] = useState(0)
  return (
    <>
      <Tab activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
        <TabItems>
          {IndexTabData.map(({ tab }, index) => {
            return (
              <TabToggle key={index} eventKey={index}>
                {tab}
              </TabToggle>
            )
          })}
        </TabItems>
        <div className="pt-24">
          {IndexTabData.map((tab, index) => {
            return (
              <TabPanel key={index} eventKey={index}>
                <IndexTabContent
                  imgSrc={tab.imgSrc}
                  imgAlt={tab.imgAlt}
                  title={tab.title}
                  description={tab.description}
                  btnLink={tab.btnLink}
                />
              </TabPanel>
            )
          })}
        </div>
      </Tab>
      <Accordion>
        {IndexTabData.map((tab, index) => {
          return (
            <AccordionContent key={index}>
              <AccordionToggle eventKey={index}>{tab.tab}</AccordionToggle>
              <AccordionCollapse eventKey={index}>
                <IndexTabContent
                  imgSrc={tab.imgSrc}
                  imgAlt={tab.imgAlt}
                  title={tab.title}
                  description={tab.description}
                  btnLink={tab.btnLink}
                />
              </AccordionCollapse>
            </AccordionContent>
          )
        })}
      </Accordion>
    </>
  )
}

export default IndexTab
