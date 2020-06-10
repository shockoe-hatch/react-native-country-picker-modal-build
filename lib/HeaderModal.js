import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import CloseButton from './CloseButton';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
export const HeaderModal = (props) => {
    const { withCloseButton, closeButtonImage, closeButtonStyle, closeButtonImageStyle, headerTitle, headerStyle, onClose, } = props;
    return (React.createElement(View, { style: styles.container },
        withCloseButton && React.createElement(CloseButton, { image: closeButtonImage, style: closeButtonStyle, imageStyle: closeButtonImageStyle, onPress: onClose }),
        React.createElement(Text, { style: headerStyle }, headerTitle),
        React.createElement(View, null)));
};
HeaderModal.defaultProps = {
    withCloseButton: true
};
//# sourceMappingURL=HeaderModal.js.map