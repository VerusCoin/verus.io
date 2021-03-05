import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionCollapse,
  AccordionToggle,
} from '@src/components'

const FAQ = () => {
  const [activeEventKey, setActiveEventKey] = useState(0)
  const FAQcontentClass = 'max-w-3xl px-6 pt-8 pb-4 leading-relaxed'

  return (
    <>
      <NextSeo
        title="FAQ"
        description="A complied list of frequenty asked questions."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'VRSC, Verus, Exchanges, Verus Mining, Verus Staking, Earn Verus, Earn VRSC, get VRSC, VRSC Exchanges',
          },
        ]}
      />
      <div className="container flex flex-col items-center justify-center mt-8 ">
        <div className="w-full max-w-4xl mb-12 md:mb-32">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl md:leading-relaxed">
            Frequently Asked Questions
          </h1>

          <Accordion
            className="block"
            activeEventKey={activeEventKey}
            onToggle={setActiveEventKey}
          >
            {/* 0 */}
            <AccordionContent>
              <AccordionToggle eventKey={0}>
                Was there an ICO for Verus?
              </AccordionToggle>
              <AccordionCollapse eventKey={0}>
                <p className={FAQcontentClass}>
                  No. Verus is fairly launched, with equal opportunity for
                  everyone to earn coins through mining and staking. Also, Verus
                  had no premine, and has no developer fees.
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 1 */}
            <AccordionContent>
              <AccordionToggle eventKey={1}>
                Where can I find a roadmap?
              </AccordionToggle>
              <AccordionCollapse eventKey={1}>
                <p className={FAQcontentClass}>
                  Verus has no roadmaps or deadlines. We are a community project
                  without central entity or commercial interests.
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 2 */}
            <AccordionContent>
              <AccordionToggle eventKey={2}>Can I mine Verus?</AccordionToggle>
              <AccordionCollapse eventKey={2}>
                <p className={FAQcontentClass}>
                  Yes. Anyone can start mining Verus with a CPU and GPU.{' '}
                  <Link
                    className="underline text-bluebutton-default"
                    href="/mining-and-staking/"
                  >
                    Learn more
                  </Link>
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 3 */}
            <AccordionContent>
              <AccordionToggle eventKey={3}>Can I stake Verus?</AccordionToggle>
              <AccordionCollapse eventKey={3}>
                <p className={FAQcontentClass}>
                  Yes. Anyone can start staking Verus without any minimum
                  requirements.{' '}
                  <Link
                    className="underline text-bluebutton-default"
                    href="/mining-and-staking/"
                  >
                    Learn more
                  </Link>
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 4 */}
            <AccordionContent>
              <AccordionToggle eventKey={4}>
                What is the maximum supply of Verus?
              </AccordionToggle>
              <AccordionCollapse eventKey={4}>
                <p className={FAQcontentClass}>83,540,184 VRSC</p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 5 */}
            <AccordionContent>
              <AccordionToggle eventKey={5}>
                Is Verus a privacy coin?
              </AccordionToggle>
              <AccordionCollapse eventKey={5}>
                <p className={FAQcontentClass}>
                  Verus supports fully private, zero knowledge transactions that
                  use zk- SNARK technologies.
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 6 */}
            <AccordionContent>
              <AccordionToggle eventKey={6}>
                What is impermanent loss?
              </AccordionToggle>
              <AccordionCollapse eventKey={6}>
                <p className={FAQcontentClass}>
                  Impermanent loss is nothing more than the difference between
                  constant-mix vs buy-and-hold strategy. An example: when you
                  hold a currency that is 50/50% backed by VRSC and BTC, you
                  might suffer an opportunity loss when compared to holding VRSC
                  and BTC directly. The upside is you will have less risk.
                </p>
              </AccordionCollapse>
            </AccordionContent>
            {/* 7 */}
            {/* <AccordionContent>
              <AccordionToggle eventKey={7}></AccordionToggle>
              <AccordionCollapse eventKey={7}>
                <p className={FAQcontentClass}></p>
              </AccordionCollapse>
            </AccordionContent> */}
            {/* 8 */}
            {/* <AccordionContent>
              <AccordionToggle eventKey={8}></AccordionToggle>
              <AccordionCollapse eventKey={8}>
                <p className={FAQcontentClass}></p>
              </AccordionCollapse>
            </AccordionContent> */}
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default FAQ
