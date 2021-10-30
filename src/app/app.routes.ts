import {EncodeComponent} from './views/encode/encode.component';
import {DecodeComponent} from './views/decode/decode.component';
import {DocumentationComponent} from './views/documentation/documentation.component';


export const appRoutes = [
  { path: 'encode', component: EncodeComponent },
  { path: 'decode', component: DecodeComponent },
  { path: '', component:  DocumentationComponent, pathMatch: 'full'},
  { path: '**',   redirectTo: '' },
];
