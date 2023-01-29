import {FlatList, Text, View, ViewabilityConfig, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import fonts from '../../theme/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import spacing from '../../theme/spacing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import QuoteMenu from '../../components/QuoteMenu/QuoteMenu';

const QuoteScreen = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [activeQuoteCategory, setActiveQuoteCategory] = useState('');
  const [activeQuoteFavorite, setActiveQuoteFavorite] = useState(false);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        const {item, index} = viewableItems[0];
        setActiveQuoteIndex(index || 0);
        setActiveQuoteCategory(item.item.category);
        setActiveQuoteFavorite(item.item.favorite);
      }
    },
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNavigation />
      <View
        style={{
          flex: 1,
          paddingHorizontal: spacing.xxlg,
          justifyContent: 'space-between',
        }}>
        <View style={styles.categoryAndMoreOptionsContainer}>
          <StyledText style={{fontSize: fonts.size.xlg}}>
            {activeQuoteCategory}
          </StyledText>
          <QuoteMenu />
        </View>
        <FlatList
          style={{flexGrow: 1}}
          data={QUOTES_LIST}
          renderItem={({item}) => (
            <View style={styles.quoteContainer}>
              <StyledText style={styles.quoteText}>{item.item.text}</StyledText>
              <StyledText style={styles.author}>
                - {item.item.author}
              </StyledText>
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />

        <View style={styles.footer}>
          <View style={styles.bookmarkAndShareContainer}>
            <MaterialCommunityIcons
              size={45}
              name={activeQuoteFavorite ? 'bookmark' : 'bookmark-outline'}
              color={colors.mintGreen}
            />
            <MaterialIcons size={45} name="ios-share" />
          </View>
          <View
            style={{
              flex: 1 / 2,
              alignItems: 'center',
            }}>
            <AnimatedDotsCarousel
              length={QUOTES_LIST.length}
              currentIndex={activeQuoteIndex}
              maxIndicators={1}
              interpolateOpacityAndColor={true}
              activeIndicatorConfig={{
                color: colors.black,
                margin: 3,
                opacity: 1,
                size: 10,
              }}
              inactiveIndicatorConfig={{
                color: colors.grey,
                margin: 3,
                opacity: 0.5,
                size: 10,
              }}
              decreasingDots={[
                {
                  config: {
                    color: colors.grey,
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                  },
                  quantity: 1,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuoteScreen;
