import { NgModule } from '@angular/core';
import { TestComponent } from './test/test';
import { SccComponent } from './scc/scc';
@NgModule({
	declarations: [TestComponent,
    SccComponent],
	imports: [],
	exports: [TestComponent,
    SccComponent]
})
export class ComponentsModule {}
