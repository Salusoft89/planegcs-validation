import * as Codegen from '@sinclair/typebox-codegen';
import fs from 'node:fs';
import path from 'path';

const dir = 'node_modules/@salusoft89/planegcs/dist';
const out_dir = 'dist';

const id_path = path.join(dir, '/planegcs_dist/id.d.ts');
const enums_path = path.join(dir, '/planegcs_dist/enums.d.ts');
const geom_params_path = path.join(dir, '/sketch/geom_params.d.ts');
const constraints_path = path.join(dir, '/planegcs_dist/constraints.d.ts');
const primitives_path = path.join(dir, '/sketch/sketch_primitive.d.ts');

type Validator = 'typebox' | 'zod' | 'valibot' | 'arktype' | 'yup';
function generate_validator_code_string(validator: Validator, input: string): string {
    if (validator === 'typebox') {
        return Codegen.TypeScriptToTypeBox.Generate(input);
    }
    const model = Codegen.TypeScriptToModel.Generate(input);

    if (validator === 'zod') {
        return Codegen.ModelToZod.Generate(model);
    }
    if (validator === 'arktype') {
        return Codegen.ModelToArkType.Generate(model);
    }
    if (validator === 'valibot') {
        return Codegen.ModelToValibot.Generate(model);
    }
    if (validator === 'yup') {
        return Codegen.ModelToYup.Generate(model);
    }

    validator satisfies never;
    throw Error("Unimplemented");
}

function generate_validator_code(validator: Validator, paths_in: string[], path_out: string) {
    let ts_code = "";
    for (const path of paths_in) {
        const new_code = fs.readFileSync(path).toString();
        ts_code += new_code;
    }
    const validator_code = generate_validator_code_string(validator, ts_code);
    fs.writeFileSync(path_out, validator_code, 'utf8');
}

const all_validators: Validator[] = ['typebox', 'arktype', 'zod', 'valibot', 'yup'];

for (const validator of all_validators) {
    generate_validator_code(
        validator,
        [id_path, enums_path, geom_params_path, constraints_path, primitives_path],
        path.join(out_dir, `${validator}.ts`)
    );
}