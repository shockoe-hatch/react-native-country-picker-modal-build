import { ReactNode } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle, TextStyle } from 'react-native';
interface HeaderModalProps {
    withFilter?: boolean;
    withCloseButton?: boolean;
    closeButtonImage?: ImageSourcePropType;
    closeButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImageStyle?: StyleProp<ImageStyle>;
    headerTitle?: string;
    headerStyle?: any;
    onClose(): void;
    renderFilter(props: HeaderModalProps): ReactNode;
}
export declare const HeaderModal: {
    (props: HeaderModalProps): JSX.Element;
    defaultProps: {
        withCloseButton: boolean;
    };
};
export {};
