import { useState } from 'react'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import {
  Tab,
  TabPanel,
  Accordion,
  AccordionContent,
  useMediaQuery,
} from '@/components/elements/TabAccordion'
import MessageContent from './MessageContent'
import HashContent from './HashContent'
import FileContent from './FileContent'

const StyledContainer = styled.div`
  padding: ${(props) => props.theme.spaces.xs};
  margin: 0 auto;
  max-width: 900px;
`

const SigTab = () => {
  const { t } = useTranslation('signatures')
  const [activeEventKey, setActiveEventKey] = useState(0)
  const TabItems = [t('tab.message.tab'), t('tab.file.tab'), t('tab.hash.tab')]

  return (
    <StyledContainer>
      {!useMediaQuery('(min-width: 768px)') && (
        <Accordion>
          <AccordionContent eventKey={0} title={t('tab.message.tab')}>
            <MessageContent />
          </AccordionContent>
          <AccordionContent eventKey={1} title={t('tab.file.tab')}>
            <FileContent />
          </AccordionContent>
          <AccordionContent eventKey={2} title={t('tab.hash.tab')}>
            <HashContent />
          </AccordionContent>
        </Accordion>
      )}
      {useMediaQuery('(min-width: 768px)') && (
        <Tab
          tabItems={TabItems}
          activeEventKey={activeEventKey}
          onToggle={setActiveEventKey}
        >
          <TabPanel eventKey={0}>
            <MessageContent />
          </TabPanel>
          <TabPanel eventKey={1}>
            <FileContent />
          </TabPanel>
          <TabPanel eventKey={2}>
            <HashContent />
          </TabPanel>
        </Tab>
      )}
    </StyledContainer>
  )
}

export default SigTab
