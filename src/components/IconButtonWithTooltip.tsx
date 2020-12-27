import { IconButton, Tooltip } from "@material-ui/core"
import React from "react"

interface IconButtonWithTooltipProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
}

const IconButtonWithTooltip = ({ title, icon, onClick }: IconButtonWithTooltipProps) => {
  return (
    <Tooltip title={title}>
      <IconButton size="small" onClick={onClick} color="primary" aria-label="add">
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default IconButtonWithTooltip
