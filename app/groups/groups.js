System.register(["angular2/core", "../authHelper/authHelper"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authHelper_1;
    var Groups;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authHelper_1_1) {
                authHelper_1 = authHelper_1_1;
            }],
        execute: function() {
            Groups = (function () {
                function Groups(authHelper) {
                    var _this = this;
                    this.displayName = "";
                    authHelper.getRequestPromise("/v1.0/me/").then(function (data) {
                        if (data) {
                            _this.displayName = data.displayName;
                        }
                        else {
                            alert("An error occurred calling the Microsoft Graph: " + data);
                        }
                    });
                }
                Groups = __decorate([
                    core_1.Component({
                        selector: "app-user",
                        template: "<p>Groups</p>",
                    }), 
                    __metadata('design:paramtypes', [authHelper_1.AuthHelper])
                ], Groups);
                return Groups;
            })();
            exports_1("Groups", Groups);
        }
    }
});
//# sourceMappingURL=groups.js.map