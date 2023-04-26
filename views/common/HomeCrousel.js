import { BackHandler, Text, View, StatusBar } from 'react-native'
import React, { Component } from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { HEIGHT } from '../../common/Constants';
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                }, {
                    title: "Item 6",
                    text: "Text 6",
                },
            ]
        }
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        BackHandler.exitApp()
        return true
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }


    _renderItem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 150,
                padding: 25,
                marginLeft: 25,
                marginRight: 15,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }


    get pagination() {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: 'transparent' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: '#fff'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }



    render() {
        return (
            <View style={{marginVertical:15}}>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })}
                        containerCustomStyle={{ flex: 1 }}
                        slideStyle={{ flex: 1 }}
                    // activeDotIndex={this.state.activeIndex}
                    />

                </View>
            </View>
        );
    }
}