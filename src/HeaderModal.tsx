import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Text,
} from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

interface HeaderModalProps {
  withFilter?: boolean
  withCloseButton?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  headerTitle?: string
  headerStyle: StyleProp<TextStyle>
  onClose(): void
  renderFilter(props: HeaderModalProps): ReactNode
}
export const HeaderModal = (props: HeaderModalProps) => {
  const {
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    headerTitle,
    headerStyle,
    onClose,
  } = props
  return (
    <View style={styles.container}>
      {withCloseButton && <CloseButton
        image={closeButtonImage}
        style={closeButtonStyle}
        imageStyle={closeButtonImageStyle}
        onPress={onClose}
      />}
      <Text style={headerStyle}>{headerTitle}</Text>
      <View />
    </View>
  )
}

HeaderModal.defaultProps = {
  withCloseButton: true
}
