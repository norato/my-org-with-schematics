import { Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';
import { Schema } from '@schematics/angular/component/schema';

export function myComponentSchematics(options: Schema): Rule {
  return buildComponent({ ...options });
}
