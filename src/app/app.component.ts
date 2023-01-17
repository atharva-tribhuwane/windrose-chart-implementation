import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
    ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object | undefined;
    public title: string | undefined;
    public primaryYAxis: Object | undefined;
    public data: Object[] | undefined;


    ngOnInit(): void {
        this.data = [{ x: 'N', y: 28 }, { x: 'E', y: 25 },{ x:'S' , y: 26 }, { x: 'W', y: 27 },{ x: 'NH', y: 27 },{ x: 'BHG', y: 27 }];
        this.primaryXAxis = {
            title: 'Direction',
            valueType: 'Category'
            };
        this.primaryYAxis = {
            minimum: 0, maximum: 10, interval: 2,
            title: 'Efficiency',
            };

        this.title = 'Efficiency of oil-fired power production';

    }
}//https://ej2.syncfusion.com/angular/demos/chart/polar-stacking-column/
//https://ej2.syncfusion.com/angular/documentation/chart/polar-radar?cs-save-lang=1&cs-lang=ts