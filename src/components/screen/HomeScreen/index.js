import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import BaseScreen from '../BaseScreen';

import KeyboardScrollView from '../../element/KeyboardScrollView';
import { insets } from '../../../utils/DeviceUtil';
import Colors from '../../../../assets/Colors';
import CustomText from '../../common/Text';
import Image from '../../common/Image';
import SVGIcon from '../../../../assets/SVGIcon';
import { translation } from '../../../translation';
import { FontKey } from '../../../../assets/fonts/FontKey';
import InputField from '../../common/InputField';
import SBButton from '../../common/SBButton';

const dumpData = [
  "Homeopathy",
  "Ayurvedic",
  "Allospathy",
  "Stomach",
]
class HomeScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    return <View
      style={styles.headerContainer}>
      <View
        style={styles.titleRow}>
        <CustomText
          size={14}
        >
          New Delhi
        </CustomText>
        <SVGIcon.down_arrow
          style={{
            marginLeft: 10
          }}
          width={18}
          height={18} />
      </View>
      <Image
        style={styles.avatar}
      />
    </View>
  }

  renderSearch = () => {
    return (<View
      style={styles.searchContainer}>
      <CustomText
        size={14}
        font={FontKey.bold}
        style={{
          lineHeight: 21
        }}>
        {translation.formatString(translation.helloUser, "Inidcasolutions")}
      </CustomText>
      <CustomText
        size={18}
        style={styles.whatYouLooking}>
        {translation.whatAreYouLookingFor}
      </CustomText>
      <InputField
        Icon={SVGIcon.search}
        containerStyle={{
          marginTop: 30
        }}
        placeholder={translation.searchMedicinePlaceholder} />
    </View>)
  }

  renderBroadCast = () => {
    return (<View
      style={styles.broadcastContainer}>
      <SVGIcon.medicine_cover
        style={styles.broadcastCover} />
      <SVGIcon.medicine_overlay
        style={styles.broadcastCover} />
      <CustomText
        size={12}
        font={FontKey.bold}
        style={{
          lineHeight: 18
        }}>
        {translation.broadcastWithPrescription}
      </CustomText>
      <CustomText
        size={10}
        style={styles.broadcastWithPrescriptionDes}>
        {translation.broadcastWithPrescriptionDes}
      </CustomText>
      <View
        style={styles.broadcastRow}>
        <SBButton
          style={styles.broadcastButton}>
          <CustomText
            size={11}
            font={FontKey.bold}
            style={styles.broadcastLabel}>
            {translation.broadcast}
          </CustomText>
        </SBButton>
      </View>
    </View>)
  }

  renderNext = () => {
    return (<SBButton
      style={styles.next}>
      <CustomText
        font={FontKey.bold}
        size={14}>
        {translation.next}
      </CustomText>
    </SBButton>)
  }

  renderCategories = () => {
    return (
      <View
        style={styles.categoriesContainer} >
        <CustomText
          size={14}
          font={FontKey.bold}
          style={styles.categoriesLabel}
        >
          {translation.categories}
        </CustomText>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
          }}
          contentContainerStyle={{
            paddingHorizontal: 30
          }}
          horizontal>
          {dumpData.map((category, index) => {
            return (<View
              style={[styles.listCategoriesHorizontal, {
                marginRight: index < dumpData.length - 1 ? 10 : 0
              }]}>
              <CustomText
                size={12}
                style={styles.horizontalCategoryLabel}>
                {category}
              </CustomText>
            </View>)
          })}
        </ScrollView>
      </View>
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderUnderLogo()}
        <KeyboardScrollView
          style={{ flex: 1 }}
        >
          <View
            style={styles.contentContainer}
          >
            {this.renderHeader()}
            {this.renderSearch()}
            {this.renderBroadCast()}
            {this.renderCategories()}
          </View>
        </KeyboardScrollView>
        {this.renderNext()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  horizontalCategoryLabel: {
    lineHeight: 18,
    color: Colors.prussian_blue
  },
  listCategoriesHorizontal: {
    height: 40,
    minWidth: 100,
    paddingHorizontal: 8,
    backgroundColor: Colors.placebo,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'center',
  },
  categoriesLabel: {
    lineHeight: 21,
    marginLeft: 30
  },
  categoriesContainer: {
    marginTop: 30,
  },
  next: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    height: 50,
    paddingHorizontal: 80,
    backgroundColor: Colors.prussian_blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
    shadowRadius: 20,
    shadowOpacity: 0.08,
  },
  broadcastLabel: {
    lineHeight: 16,
    color: Colors.prussian_blue
  },
  broadcastButton: {
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: Colors.white,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  broadcastRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "flex-end"
  },
  broadcastWithPrescriptionDes: {
    lineHeight: 15,
    marginTop: 10
  },
  broadcastCover: {
    flex: 1,
    position: 'absolute'
  },
  broadcastContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    padding: 20
  },
  whatYouLooking: {
    lineHeight: 27,
    marginTop: 5
  },
  searchContainer: {
    marginTop: 30,
    marginHorizontal: 30
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    marginRight: 30
  },
  titleRow: {
    flexDirection: "row",
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: insets.top,
    alignItems: "center",
    backgroundColor: Colors.TRANSPARENT,
    height: 30,
    justifyContent: 'flex-end'
  },
  rememberPassRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  resetButton: {
    height: 60,
    backgroundColor: Colors.prussian_blue,
    borderRadius: 10,
    alignItem: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  inputContainer: {
    marginTop: 30
  },
  resetDes: { lineHeight: 24, marginTop: 4 },
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});
