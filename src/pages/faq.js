import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionCollapse,
  AccordionToggle,
} from '@src/components'

const CustomAccordion = (props) => {
  const {
    id,
    tabName,
    label,
    children,
    radioTab,
    handleTabChange,
    handleTabCheck,
  } = props
  return (
    <div className="w-full my-2 overflow-hidden tab b">
      <input
        className="absolute opacity-0"
        id={`${tabName}-${id}`}
        type="radio"
        name={tabName}
        value={`${tabName}-${id}`}
        checked={radioTab === `${tabName}-${id}`}
        onChange={() => {
          handleTabChange(`${tabName}-${id}`)
        }}
      />
      <label
        className="block py-4 text-xl leading-relaxed border-2 border-t-0 border-l-0 border-r-0 border-gray-200 border-solid cursor-pointer"
        htmlFor={`${tabName}-${id}`}
        onClick={() => {
          handleTabCheck(`${tabName}-${id}`)
        }}
      >
        {label}
      </label>
      <div className="overflow-hidden leading-relaxed tab-content-accordion">
        {children}
      </div>
    </div>
  )
}

const FAQ = () => {
  const [radioTab, setRadioTab] = useState(null)

  const handleTabCheck = (tab) => {
    let element = document.getElementById(tab)

    let isOpen = element.checked
    if (isOpen) {
      element.checked = !isOpen
    }
    setRadioTab(tab)
  }
  const handleTabChange = (tab) => {
    setRadioTab(null)
  }
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

          <Accordion className="block">
            {/* 0 */}
            <AccordionContent>
              <AccordionToggle eventKey={0}>
                Was there an ICO for Verus?
              </AccordionToggle>
              <AccordionCollapse eventKey={0}>
                <p className={FAQcontentClass}>
                  No. Verus is fairly launced, with equal opportunity for
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
              <AccordionToggle eventKey={4}></AccordionToggle>
              <AccordionCollapse eventKey={4}>
                <p className={FAQcontentClass}></p>
              </AccordionCollapse>
            </AccordionContent>
          </Accordion>

          <div className="tab-content">
            {/* 3 */}

            {/* 4 */}
            <CustomAccordion
              id="4"
              tabName="faqTab"
              label="Can I stake Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="max-w-3xl px-6 pt-8 pb-4 leading-relaxed">
                Yes. Anyone can start staking Verus without any minimum
                requirements.{' '}
                <a
                  className="underline text-bluebutton-default"
                  href="/mining-and-staking/"
                >
                  Learn more
                </a>{' '}
              </p>
            </CustomAccordion>
            {/* 5 */}
            <CustomAccordion
              id="5"
              tabName="faqTab"
              label="What is the maximum supply of Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4">83,540,184 VRSC</p>
            </CustomAccordion>
            {/* 6 */}

            {/* 7 */}

            {/* 8 */}
            <CustomAccordion
              id="8"
              tabName="faqTab"
              label="Is Verus a privacy coin?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="max-w-3xl px-6 pt-8 pb-4 leading-relaxed">
                Verus supports fully private, zero knowledge transactions that
                use zk- SNARK technologies.
              </p>
            </CustomAccordion>
            {/* 9 Need Content */}
            {/* <CustomAccordion
              id="9"
              tabName="faqTab"
              label="How does the Verus DeFi work?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="max-w-3xl px-6 pt-8 pb-4 leading-relaxed">text</p>
            </CustomAccordion> */}
            {/* 10 */}
            <CustomAccordion
              id="10"
              tabName="faqTab"
              label=" What is impermanent loss?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="max-w-3xl px-6 pt-8 pb-4 leading-relaxed">
                Impermanent loss is nothing more than the difference between
                constant-mix vs buy-and-hold strategy. An example: when you hold
                a currency that is 50/50% backed by VRSC and BTC, you might
                suffer an opportunity loss when compared to holding VRSC and BTC
                directly. The upside is you will have less risk.{' '}
              </p>
            </CustomAccordion>
            {/* 11 */}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ

// template for FAQ
{
  /* 
<CustomAccordion
  id="#"
  tabName="faqTab"
  label="question?"
  radioTab={radioTab}
  handleTabChange={handleTabChange}
  handleTabCheck={handleTabCheck}
>
  <p className="px-6 pt-8 pb-4">
    text
  </p>
</CustomAccordion> 
*/
}
