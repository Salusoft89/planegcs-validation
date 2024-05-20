import { TypeCompiler } from '@sinclair/typebox/compiler';
import { SketchPrimitive } from "../dist/typebox";
import { writeFileSync } from 'fs';

const sketch_primitive_validator = TypeCompiler.Code(SketchPrimitive);

writeFileSync('dist/sketch_primitive.ts', sketch_primitive_validator, 'utf8');