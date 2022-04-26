import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseElement from '../BaseElement';
import { getStatusBarHeight } from '../../../utils/DeviceUtil';
import NavigationService from '../../../navigation/NavigationService';
import { Images } from '../../../themes/Images';
import { TouchablePlatform } from '../../../modules/TouchablePlatform';
import Text from '../../common/Text';
import Image from '../../common/Image';
import { ROUTER_NAME } from '../../../navigation/NavigationConst';
import LinearMainComponent from '../LinearMainComponent';
import styled from 'styled-components';
import Colors from '../../../../assets/Colors';

export const NAV_BAR_HEIGHT = 60;
export const HEADER_HEIGHT = (getStatusBarHeight() + NAV_BAR_HEIGHT);

const WrapIconHeader = styled(View)`
  
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
  navContainer: {
    zIndex: 1,
    height: HEADER_HEIGHT,
    paddingBottom: 8,
    paddingHorizontal: 8,
    borderColor: Colors.mainColor,
    justifyContent: 'flex-end',
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: 'transparent',
  },
  navBar: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  navBarFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  txtTitle: {
    color: Colors.white,
  },
  iconLeft: { width: 32, height: 32, marginLeft: -10 },
  iconRight: {
    width: 25,
    height: 25,
  },
  containerItem: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerItemRight: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Header extends BaseElement {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }

  static defaultItemSearch = () => {
    return (
      <TouchablePlatform
        onPress={() =>
          NavigationService.getInstance().navigate({
            routerName: ROUTER_NAME.SEARCH,
          })
        }
        style={styles.containerItemRight}
      >
        <Image
          style={styles.iconRight}
          source={Images.assets.ic_search.source}
        />
      </TouchablePlatform>
    );
  };

  renderRight = () => {
    const { listIconAction, renderRight, containerRightStyle } = this.props;
    let IconView = null;
    if (listIconAction && listIconAction.length > 0) {
      IconView = (
        <WrapIconHeader
          style={[
            {
              alignSelf: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
              height: Theme.size.searchInputHeight,
              justifyContent: 'flex-end',
              flex: 1,
            },
            containerRightStyle,
          ]}
        >
          {listIconAction.map((it) => {
            return it.component;
          })}
        </WrapIconHeader>
      );
      return IconView;
    }
    if (renderRight) {
      return <View
        style={[{
          flex: 1,
          height: Theme.size.searchInputHeight,
          alignItems: 'flex-end',
        }, containerRightStyle]}>
        {renderRight()}
      </View>;
    }
    return <View style={{ flex: 1 }} />;
  }

  renderContent() {
    const {
      title,
      isBack,
      onBack,
      renderLeft,
      renderCenter,
      styleNavbar = {},
      styleNavContainer = {},
      navBarFirstStyle = {},
    } = this.props;

    return (
      <LinearMainComponent
        resizeMode={'stretch'}
        style={[
          styles.navContainer,
          styleNavContainer,
        ]}
      >
        <View style={[styles.navBar, styleNavbar]}>
          <View style={[styles.navBarFirst, navBarFirstStyle]}>
            {renderLeft && renderLeft() ? (
              renderLeft()
            ) : isBack ? (
              <TouchablePlatform
                onPress={() => {
                  if (onBack) {
                    onBack();
                    return;
                  }
                  NavigationService.getInstance().goBack();
                }}
                style={styles.containerItem}
              >
                <Image
                  style={styles.iconLeft}
                  source={Images.assets.back.source}
                />
              </TouchablePlatform>
            ) : <View style={styles.containerItem} />}
            {renderLeft ? null : (
              <View style={{ alignSelf: 'center', flex: 1, marginRight: 4 }}>
                <Text bold style={styles.txtTitle} numberOfLines={1}>
                  {title || ''}
                </Text>
              </View>
            )}
          </View>
          {renderCenter ? renderCenter() : null}
          {this.renderRight()}
        </View>
      </LinearMainComponent>
    );
  }
}

export default Header;
