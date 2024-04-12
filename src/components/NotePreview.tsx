import { cn } from '../utils'
import { NoteInfo } from '../models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
    isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
    title,
    content,
    lastEditTime,
    isActive = false,
    className,
    ...props} : NotePreviewProps) => {
    // const date = formatDateFromMs(lastEditTime)
  return (
    <div className={cn('curser-pointer px-2 py-3 rounded-md transition-colors duration-75',{
        'bg-zinc-400/75': isActive,
        'hover:bg-zinc-500/75': !isActive
    },className)}{...props}>
        <h3 className='mb-1 font-bold truncate'>{title}</h3>
        <span className='inline-block w-full  text-xs font-light text-left'>{lastEditTime}</span>
    </div>
  )
}
