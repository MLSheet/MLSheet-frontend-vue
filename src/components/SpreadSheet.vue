<template>
    <div class="spreadsheet">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th v-for="(col, index) in columns" :key="index">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <th>{{ rowIndex + 1 }}</th>
                    <td v-for="(cell, colIndex) in row" :key="colIndex" contenteditable>{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component
export default class Spreadsheet extends Vue {
    x_size: number = 100
    y_size: number = 1000


    getSpreadsheetColumnName(columnNumber: number): string {
        let columnName = '';
        while (columnNumber > 0) {
            const modulo = (columnNumber - 1) % 26;
            columnName = String.fromCharCode('A'.charCodeAt(0) + modulo) + columnName;
            columnNumber = Math.floor((columnNumber - modulo) / 26);
        }
        return columnName;
    }

    columns = Array.from({ length: this.x_size }, (_, index) => this.getSpreadsheetColumnName(index + 1));
    rows = Array(this.y_size).fill(Array(this.x_size).fill(''));
}
</script>
  
<style lang="scss">
@import '../assets/scss/variables.scss';

.spreadsheet {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-collapse: collapse;
    overflow: scroll;

    table {
        margin-top: 20px;
        border-collapse: collapse;
        border: 1px solid #ddd;
        font-family: $font-family;

        th,
        td {
            border: 1px solid #ddd;
            padding: 4px;
            font-size: 12px;
            text-align: center;
            height: 10px;
            min-width: 80px;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        th:first-child,
        td:first-child {
            font-weight: bold;
            text-align: left;
            background-color: #f2f2f2;
        }

        th:not(:first-child) {
            font-size: 12px;
        }

        td {
            &:focus {
                outline: none;
                background-color: #e0e0e0;
            }
        }
    }

}
</style>
  