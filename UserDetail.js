import React from 'react';
import {View, Text} from 'react-native';

export default function UserDetail({route}) {
    const { itemId, itemName, itemUserName, itemEmail, itemAddress, itemPhone, itemWebsite, itemCompany, itemAddress_Street, itemAddress_Suite, itemAddress_City, itemAddress_Zipcode, itemAddress_Geo_LAT, itemAddress_Geo_LNG,  itemCompany_Name,itemCompany_catchPhrase , itemCompany_Bs } = route.params;
    return (
        <View>
            <Text style={{ color: "black", fontWeight: "300" }}>ID: {(itemId)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>NAME: {(itemName)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>USERNAME: {(itemUserName)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>EMAIL: {(itemEmail)}</Text>           
            <Text style={{ color: "black", fontWeight: "300" }}>STREET: {(itemAddress_Street)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>SUITE: {(itemAddress_Suite)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>ZIPCODE: {(itemAddress_Zipcode)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>GEO_LAT: {(itemAddress_Geo_LAT)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>GEO_LAT: {(itemAddress_Geo_LNG)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>STREET: {(itemAddress_Street)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>PHONE: {(itemPhone)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>WEBSITE: {(itemWebsite)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>COMPANY: {(itemCompany_Name)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>COMPANY CATCHPHRASE: {(itemCompany_catchPhrase)}</Text>
            <Text style={{ color: "black", fontWeight: "300" }}>COMPANY BS: {(itemCompany_Bs)}</Text>

        </View>
    )
}