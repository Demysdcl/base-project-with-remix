import { ReactNode } from 'react'
import { ChildrenProp } from '~/types'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'

type CollapsibleCardProps = {
  title: ReactNode
  children: ChildrenProp
}

export const CollapsibleCard = ({ title, children }: CollapsibleCardProps) => (
  <Collapsible>
    <CollapsibleTrigger>{title}</CollapsibleTrigger>
    <CollapsibleContent>{children}</CollapsibleContent>
  </Collapsible>
)
