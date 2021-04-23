import React from 'react'
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  fade,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { nanoid } from 'nanoid'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import { Heading, P } from '../Typography/Typography'

// item.summary can be a string, or a React.node. If it is a string, it will be wrapped in a <Heading> component by default.
// item.details can be a string, or a React.node. If it is a string, it will be wrapped in a <P> component by default.

const Accordion = ({
  items,
  summaryHeadingVariant = 'h3',
  summaryHeadingComponent = 'h3',
  summaryExtraMUIProps = {},
  detailsExtraMUIProps = {},
  accordionExtraMUIProps = {},
}) => {
  return (
    <AccordionContainer>
      {items.map(({ summary, details }) => {
        const itemId = nanoid()
        const summaryId = nanoid()

        const itemSummary =
          typeof summary === 'string' ? (
            <StyledHeading
              variant={summaryHeadingVariant}
              component={summaryHeadingComponent}
            >
              {summary}
            </StyledHeading>
          ) : (
            summary
          )

        const itemDetails =
          typeof details === 'string' ? <P>{details}</P> : details

        return (
          <StyledAccordion key={itemId} {...accordionExtraMUIProps}>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${summaryId}-content`}
              id={`panel-${itemId}-header`}
              {...summaryExtraMUIProps}
            >
              <SummaryContainer>{itemSummary}</SummaryContainer>
            </StyledAccordionSummary>
            <StyledAccordionDetails {...detailsExtraMUIProps}>
              {itemDetails}
            </StyledAccordionDetails>
          </StyledAccordion>
        )
      })}
    </AccordionContainer>
  )
}

const AccordionContainer = styled.div`
  > * {
    border-top: 2px solid
      ${({ theme }) => fade(theme.palette.text.primary, 0.3)};
  }

  > :last-child {
    border-bottom: 2px solid
      ${({ theme }) => fade(theme.palette.text.primary, 0.3)};
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`

const SummaryContainer = styled.div`
  max-width: 70%;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
`

const StyledAccordion = styled(MuiAccordion)`
  background: ${({ theme }) => theme.palette.background.default};

  :before {
    display: none;
  }

  &.Mui-expanded {
    margin-top: 0;
    margin-bottom: 0;
    ${Heading} {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

const StyledAccordionSummary = styled(MuiAccordionSummary)`
  padding-left: 0;
  padding-right: 0;

  & > .MuiAccordionSummary-content.Mui-expanded {
    margin: 12px 0;
  }
`

const StyledAccordionDetails = styled(MuiAccordionDetails)`
  display: block;

  ${match.isMD} {
    padding-left: 70px;
    padding-right: 70px;
  }
`

export default Accordion
