import {NgModule} from '@angular/core';
import {DocumentationComponent} from './documentation.component';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
    imports: [
        ComponentsModule
    ],
    declarations: [
        DocumentationComponent
    ]
})
export class DocumentationModule {
}
