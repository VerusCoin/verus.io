import React from 'react'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { ICopyright } from '@/types/molecules'
import { Col, media } from 'styled-bootstrap-grid'
import dayjs from 'dayjs'
import { DefaultText, DefaultLink, SVGs } from '@/components/elements'
import { fontSize } from '@/styles/helpers'

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${media.desktop`
      justify-content: flex-start;
  `}

  ${fontSize('menu')}
`

const StyledCopyrightList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0 0 0 20px;
  width: 100%;
  margin-top: 15px;

  ${media.desktop`
      flex-direction: row;
      width: auto;
      margin-top: 0;
    `}

  li {
    padding-right: ${(props) => props.theme.spaces.xxs};
    margin-right: ${(props) => props.theme.spaces.xxs};

    ${media.desktop`
      border-right: 1px solid ${(props: any) =>
        props.theme.colors.grey.secondary};
    `}

    &:last-child {
      border-right: 0;
    }
  }
`

const Copyright: React.FC<ICopyright> = ({ companyName, links }) => {
  const { t } = useTranslation('footer')
  return (
    <Col col={12}>
      <StyledCopyright>
        <SVGs name="logo" />

        <StyledCopyrightList>
          {companyName && (
            <li>
              <DefaultText customColor="#BFBFBF">
                &copy; {dayjs().format('YYYY')} {companyName}
              </DefaultText>
            </li>
          )}
        </StyledCopyrightList>

        <StyledCopyrightList>
          {links.map((item, index) => {
            return (
              <li key={`copyrightNav_${index}`}>
                <DefaultLink href={item.href}>{t(item.name)}</DefaultLink>
              </li>
            )
          })}
        </StyledCopyrightList>
      </StyledCopyright>
    </Col>
  )
}

export default Copyright
