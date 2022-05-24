class Report {
    data: Array<string>;
    constructor(data: Array<string>) {
        this.data = data;
    }
    run() {
        this.data.forEach(function(line) { console.log(line); });
    }
}
 
class TabbedReport extends Report {
    headers: Array<string>;
    constructor(headers: string[], values: string[]) {
        super(values);
        this.headers = headers;
    }
    run() {
        console.log(this.headers);
        super.run();
    }
}
    