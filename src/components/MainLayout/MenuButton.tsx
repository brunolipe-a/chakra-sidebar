import {
  MenuButtonProps,
  useMenuButton,
  useStyles,
  chakra,
  forwardRef
} from '@chakra-ui/react'

const StyledMenuButton = forwardRef<MenuButtonProps, 'button'>((props, ref) => {
  const styles = useStyles()
  return (
    <chakra.button
      ref={ref}
      {...props}
      __css={{
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        outline: 0,
        transition: 'all 250ms',
        ...styles.button
      }}
    />
  )
})

const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ')

export const MenuButton = forwardRef<MenuButtonProps, 'button'>(
  (props, ref) => {
    const { children, as: As, ...rest } = props

    const buttonProps = useMenuButton(rest, ref)

    const Element = As || StyledMenuButton

    return (
      <Element
        {...buttonProps}
        className={cx('chakra-menu__menu-button', props.className)}
      >
        {children}
      </Element>
    )
  }
)
