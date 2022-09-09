import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Table = ({ data, dataDispatch, me }) => {

    const attack = (item) => {
        const str = item[0] + '' + item[1] + '' + item[2] + '' + item[3]

        if (!data.playerX.cell.includes(str) && !data.playerO.cell.includes(str)) {
            if (me.player === 'playerX' && data.turn === 1) dataDispatch({ type: 'ATTACK', item: item, player: 'playerX' })
            if (me.player === 'playerO' && data.turn === 2) dataDispatch({ type: 'ATTACK', item: item, player: 'playerO' })
        }
    }

    const compareCell = (arrItem) => {
        const strItem = arrItem[0] + '' + arrItem[1] + '' + arrItem[2] + '' + arrItem[3]
        if (data.playerX.cell.includes(strItem)) return 1
        if (data.playerO.cell.includes(strItem)) return 2
        return 0
    }

    let disabledBtn = false
    if (me.player === 'playerX') {
        if (data.turn === 2) {
            disabledBtn = true
        }
    } else {
        if (data.turn === 1) {
            disabledBtn = true
        }
    }

    let indexData = -1
    return (
        <View style={styles.container}>
            {data.dataTable.map((item, index) => {
                if (index > 9) return
                return (
                    <View key={index} style={styles.tableContent}>
                        {data.dataTable.map((item, index) => {
                            if (index > 9) return
                            indexData++
                            let indexItem = indexData
                            return (
                                <TouchableOpacity
                                    disabled={disabledBtn}
                                    onPress={() => attack(data.dataTable[indexItem])}
                                    key={index}
                                    style={styles.btnItem}
                                >
                                    <Text style={[
                                        styles.textItem,
                                        { color: compareCell(data.dataTable[indexItem]) === 0 ? 'white' : compareCell(data.dataTable[indexItem]) === 1 ? 'blue' : 'red' }
                                    ]}>
                                        {compareCell(data.dataTable[indexItem]) === 0 ? '' : compareCell(data.dataTable[indexItem]) === 1 ? 'x' : 'o'}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export default Table

const styles = StyleSheet.create({
    tableContent: {
        flexDirection: 'row'
    },
    textItem: {
        fontSize: 20,
    },
    btnItem: {
        width: 30,
        height: 30,
        margin: 1,
        borderWidth: 1,
        borderColor: '#B8BDC2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
    }
})