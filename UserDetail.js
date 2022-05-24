import React from 'react';
import {View, Text} from 'react-native';

export default function UserDetail({route}) {
    const { itemId, itemName, itemUserName, itemEmail, itemAddress, itemPhone, itemWebsite, itemCompany, itemAddress_Street, itemAddress_Suite, itemAddress_City, itemAddress_Zipcode, itemAddress_Geo_LAT, itemAddress_Geo_LNG,  itemCompany_Name,itemCompany_catchPhrase , itemCompany_Bs } = route.params;
    return (
        <View>
            <Text>ID: {(itemId)}</Text>
            <Text>NAME: {(itemName)}</Text>
            <Text>USERNAME: {(itemUserName)}</Text>
            <Text>EMAIL: {(itemEmail)}</Text>           
            <Text>STREET: {(itemAddress_Street)}</Text>
            <Text>SUITE: {(itemAddress_Suite)}</Text>
            <Text>ZIPCODE: {(itemAddress_Zipcode)}</Text>
            <Text>GEO_LAT: {(itemAddress_Geo_LAT)}</Text>
            <Text>GEO_LAT: {(itemAddress_Geo_LNG)}</Text>
            <Text>STREET: {(itemAddress_Street)}</Text>
            <Text>PHONE: {(itemPhone)}</Text>
            <Text>WEBSITE: {(itemWebsite)}</Text>
            <Text>COMPANY: {(itemCompany_Name)}</Text>
            <Text>COMPANY CATCHPHRASE: {(itemCompany_catchPhrase)}</Text>
            <Text>COMPANY BS: {(itemCompany_Bs)}</Text>

        </View>
    )
}