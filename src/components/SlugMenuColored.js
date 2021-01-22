import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import {
  RiGithubFill,
  RiDiscordFill,
  RiFileTextLine,
  RiQuestionnaireLine,
  RiTeamFill,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri'
const iconSlug = {
  RiGithubFill,
  RiDiscordFill,
  RiFileTextLine,
  RiQuestionnaireLine,
  RiTeamFill,
  RiMoneyDollarCircleLine,
}
export const SlugMenuColored = ({ pathList, href }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-16 sm:grid-cols-2">
      {pathList.map((path) => {
        //need to create a dynamic href link
        const Icon = iconSlug[path.icon]
        return (
          <div
            key={path.id}
            className={cn(
              'p-6 border border-solid rounded-lg lg:px-8 lg:py-6 flex flex-col justify-between',
              {
                'text-white': path.color !== 'white',
                'bg-bluebutton-default': path.color === 'blue',
                'bg-black': path.color === 'black',
              },
              'max-w-xs'
            )}
          >
            <h2 className="p-0 m-0 text-xl font-normal ">{path.description}</h2>
            <span className="flex flex-row items-center mt-2">
              <Icon color="inheret" size="22" />
              <a
                href={path.href || path.path}
                className={cn(
                  'p-0 m-0 text-base leading-normal font-p underline ml-2',
                  {
                    'text-white': path.color !== 'white',
                    'text-black': path.color === 'white',
                    external: path.href,
                  }
                )}
                target={path.href ? '_blank' : ''}
              >
                Go to {path.name}
              </a>
            </span>
          </div>
        )
      })}
    </div>
  )
}
