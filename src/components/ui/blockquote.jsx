import { Box, Text, Icon } from '@chakra-ui/react'
import * as React from 'react'

export const Blockquote = React.forwardRef(function Blockquote(props, ref) {
  const { children, cite, citeUrl, showDash, icon, ...rest } = props

  return (
    <Box as="blockquote" ref={ref} {...rest}>
      {icon}
      <Text as="cite" cite={citeUrl}>
        {children}
      </Text>
      {cite && (
        <Text as="footer">
          {showDash ? <>&mdash;</> : null} <cite>{cite}</cite>
        </Text>
      )}
    </Box>
  )
})

export const BlockquoteIcon = Icon
