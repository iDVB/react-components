import React from 'react'
import styled, { css } from 'styled-components'

import { reduceImages } from '../_common/utils'
import { match } from '../_contexts/Theme'
import { AvoidWrap, Decorator, P } from '../Typography/Typography'

import Person from './Person'

const People = ({
  peopleData,
  peopleImages,
  imageType = 'full',
  shouldShowNamesInListView = false,
  dotRefs,
}) => {
  const headshots = reduceImages(peopleImages.headshot.edges)
  const portraits = reduceImages(peopleImages.portrait.edges)
  const landscapes = reduceImages(peopleImages.landscape.edges)

  const PeopleHtml = peopleData.map((data, index) => {
    return (
      <PeopleListItem
        key={`${data.publicId}-${index}`}
        shouldShowNamesInListView={shouldShowNamesInListView}
        count={peopleData.length}
      >
        <Person
          {...data}
          imageType={imageType}
          headshot={headshots[data.publicId]}
          portrait={portraits[data.publicId]}
          landscape={landscapes[data.publicId]}
          id={`peopleCircle-${index + 1}`}
          ref={dotRefs.current[index]}
        />
        {shouldShowNamesInListView && (
          <>
            <NameAndTitle>
              <P variant="body2">
                <strong>
                  {data.firstName} {data.lastName}
                </strong>
                {data.designation && (
                  <>
                    ,&nbsp;<AvoidWrap>{data.designation}</AvoidWrap>
                  </>
                )}
              </P>
              <P variant="body2">{data.title}</P>
            </NameAndTitle>
            <StyledDecorator />
          </>
        )}
      </PeopleListItem>
    )
  })
  return <PeopleList id="peopleList">{PeopleHtml}</PeopleList>
}

const PeopleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const StyledDecorator = styled(Decorator)`
  opacity: 0.5;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 30px;
  ${match.isSM} {
    margin-bottom: 80px;
  }
`
const PeopleListItem = styled.li`
  width: 100%;
  margin: 0;
  display: block;

  ${match.isXS} {
    flex: 0 0 50%;
    padding: 8px;

    &:nth-child(-n + 2) {
      padding-top: 0;
    }

    &:nth-child(even) {
      padding-right: 0;
    }

    &:nth-child(odd) {
      padding-left: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.only('sm')} {
    ${({ count }) => {
      const primaryRowCount = 4
      const secondaryRowCount = 3
      const mod = count % (primaryRowCount + secondaryRowCount)
      // 4 / 3 stagger
      return css`
        flex: 0 0 23.5%;
        margin: 0 1%;

        &:nth-child(7n - 3) {
          margin-right: 0;
        }

        &:nth-child(7n - 6) {
          margin-left: 0;
        }

        &:nth-child(7n) {
          margin-right: 12.75%;
        }

        &:nth-child(7n - 2) {
          margin-left: 12.75%;
        }
        ${mod === 1 &&
        css`
          &:nth-child(${count - 5}) {
            margin-right: 25.5%;
          }
          &:nth-child(${count - 4}) {
            margin-left: 12.75%;
            margin-right: 1%;
          }
          &:nth-child(${count - 3}) {
            margin: 0 1%;
          }
          &:nth-child(${count - 2}) {
            margin-right: 12.75%;
            margin-left: 1%;
          }
          &:nth-child(${count - 1}) {
            margin: 0 1% 0 0;
          }
          &:nth-child(${count}) {
            margin: 0 1%;
          }
        `}
        ${mod === 3 &&
        css`
          &:nth-child(${count}) {
            margin-right: 25.5%;
          }
        `}
        ${mod === 5 &&
        css`
          &:nth-child(${count - 2}) {
            margin-right: 25.5%;
          }
          &:nth-child(${count - 1}) {
            margin-left: 0;
            margin-right: 1%;
          }
          &:nth-child(${count}) {
            margin-left: 1%;
            margin-right: 25.5%;
          }
        `}
        ${mod === 6 &&
        css`
          &:nth-child(${count - 3}) {
            margin-right: 25.5%;
          }
          &:nth-child(${count - 2}) {
            margin-left: 12.75%;
            margin-right: 1%;
          }
          &:nth-child(${count - 1}) {
            margin-left: 1%;
            margin-right: 1%;
          }
          &:nth-child(${count}) {
            margin-left: 1%;
            margin-right: 12.75%;
          }
        `}
      `
    }}
  }

  ${match.isMD} {
    ${({ count }) => {
      const primaryRowCount = 5
      const secondaryRowCount = 4
      const mod = count % (primaryRowCount + secondaryRowCount)
      return css`
        flex: 0 0 18.4%;
        margin: 0 1%;

        &:nth-child(9n - 8) {
          margin-left: 0;
        }

        &:nth-child(9n - 4) {
          margin-right: 0;
        }
        ${mod === 1 &&
        css`
          &:nth-child(${count - 6}) {
            margin-left: 1%;
            margin-right: 20.4%;
          }
          &:nth-child(${count - 5}) {
            margin: 0 1%;
          }
          &:nth-child(${count - 3}) {
            margin-left: 1%;
            margin-right: 21.4%;
          }
          &:nth-child(${count - 2}),
          &:nth-child(${count - 1}),
          &:nth-child(${count}) {
            margin: 0 1%;
          }
        `}
        ${mod === 2 &&
        css`
          &:nth-child(${count - 3}) {
            margin-right: 22%;
          }
          &:nth-child(${count - 2}) {
            margin: 0 1% 0 0;
          }
          &:nth-child(${count - 1}) {
            margin: 0 1%;
          }
        `}
        ${mod === 4 &&
        css`
          &:nth-child(${count}) {
            margin-right: 20.4%;
          }
        `}
        ${mod === 6 &&
        css`
          &:nth-child(${count - 5}) {
            margin-left: 20%;
          }
          &:nth-child(${count - 3}) {
            margin-right: 20%;
          }
          &:nth-child(${count - 1}) {
            margin: 0 1%;
          }
          &:nth-child(${count}) {
            margin-right: 21%;
          }
        `}
        ${mod === 7 &&
        css`
          &:nth-child(${count - 3}),
          &:nth-child(${count}) {
            margin-right: 20.4%;
          }
          &:nth-child(${count - 2}) {
            margin: 0 1% 0 0;
          }
        `}
        ${mod === 8 &&
        css`
          &:nth-child(${count - 4}) {
            margin-right: 20%;
          }
          &:nth-child(${count - 3}) {
            margin-right: 1%;
          }
        `}
      `
    }}
  }
`

const NameAndTitle = styled.div`
  min-height: 100px;
  margin-top: 30px;
  text-align: center;

  ${match.isMD} {
    min-height: 75px;
  }
`

export default People
