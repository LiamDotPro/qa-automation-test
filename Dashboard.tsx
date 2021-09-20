import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Dashboard: React.FC = () => {
    return <View style={styles.container}>
        <Text testID="youMadeItText">You Made it!</Text>
        <Text testID="randomNumberText" 
            style={{
                fontSize: 22,
                paddingTop: 20
        }}>5901</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Dashboard