/*jslint browser: true, nomen: true*/
var Askar = {
    // ex. receive {serieName: "elements", objectName: "element", objectAttributes: ["name", "description", "weight"], actions: ["show", {edit: ["update"]}], values: [{id: 1, name: "element 1", description: "first element", weight: 25}, {id: 2, name: "element 2", description: "second element", weight: 34}], attributesShowSeries: ["name", "descripcion"], attributesShowObject: ["id", "name", "description", "weight"], page: 2, totalPages: 4}
    received: {},
    serieName: function () {
        'use strict';
        return this.received ? this.received.serieName : "defaultSerieName";
    },
    objectName: function () {
        'use strict';
        return this.received ? this.received.objectName : "defaultObjectName";
    },
    objectAttributes: function () {
        'use strict';
        return this.received ? this.received.objectAttributes : "defaultObjectAttributes";
    },
    actions: function () {
        'use strict';
        return this.received ? this.received.actions : "defaultActions";
    },
    values: function () {
        'use strict';
        return this.received ? this.received.values : "defaultValues";
    },
    attributesShowSeries: function () {
        'use strict';
        return this.received ? this.received.attributesShowSeries : "defaultAttributesShowSeries";
    },
    attributesShowObject: function () {
        'use strict';
        return this.received ? this.received.attributesShowObject : "defaultAttributesShowObject";
    },
    page: function () {
        'use strict';
        return this.received ? this.received.page : "defaultPage";
    },
    totalPages: function () {
        'use strict';
        return this.received ? this.received.totalPages : "defaultTotalPages";
    },

    serieUpToDate: function () {
        'use strict';
        return this.received ? this.received.totalPages : "defaultTotalPages";
    }
};
var elements = Object.create(Askar);
elements.received = {serieName: "elements", objectName: "element", objectAttributes: ["name", "description"], actions: ["show", {edit: ["update"]}], values: [{name: "element 1", description: "first element"}, {name: "element 2", description: "second element"}]};
