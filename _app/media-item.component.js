System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, MediaItemComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MediaItemComponent = (function () {
                function MediaItemComponent() {
                    this.delete = new core_1.EventEmitter();
                }
                MediaItemComponent.prototype.onDelete = function () {
                    this.delete.emit(this.mediaItem);
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], MediaItemComponent.prototype, "mediaItem", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], MediaItemComponent.prototype, "delete", void 0);
                MediaItemComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-media-item',
                        templateUrl: 'app/media-item.component.html',
                        styleUrls: ['app/media-item.component.css']
                    })
                ], MediaItemComponent);
                return MediaItemComponent;
            }());
            exports_1("MediaItemComponent", MediaItemComponent);
        }
    };
});
//# sourceMappingURL=media-item.component.js.map