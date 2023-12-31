## API Report File for "@tldraw/validate"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
const any: Validator<any>;

// @public
const array: Validator<unknown[]>;

// @public
function arrayOf<T>(itemValidator: Validator<T>): ArrayOfValidator<T>;

// @public (undocumented)
class ArrayOfValidator<T> extends Validator<T[]> {
    constructor(itemValidator: Validator<T>);
    // (undocumented)
    readonly itemValidator: Validator<T>;
    // (undocumented)
    lengthGreaterThan1(): Validator<T[]>;
    // (undocumented)
    nonEmpty(): Validator<T[]>;
}

// @public
const bigint: Validator<bigint>;

// @public
const boolean: Validator<boolean>;

// @public (undocumented)
const boxModel: ObjectValidator<{
    x: number;
    y: number;
    w: number;
    h: number;
}>;

// @public
function dict<Key extends string, Value>(keyValidator: Validator<Key>, valueValidator: Validator<Value>): DictValidator<Key, Value>;

// @public (undocumented)
class DictValidator<Key extends string, Value> extends Validator<Record<Key, Value>> {
    constructor(keyValidator: Validator<Key>, valueValidator: Validator<Value>);
    // (undocumented)
    readonly keyValidator: Validator<Key>;
    // (undocumented)
    readonly valueValidator: Validator<Value>;
}

// @public
const integer: Validator<number>;

// @public
function literal<T extends boolean | number | string>(expectedValue: T): Validator<T>;

// @public
function model<T extends {
    readonly id: string;
}>(name: string, validator: Validator<T>): Validator<T>;

// @public
const nonZeroInteger: Validator<number>;

// @public
const nonZeroNumber: Validator<number>;

// @public
const number: Validator<number>;

// @public
function object<Shape extends object>(config: {
    readonly [K in keyof Shape]: Validator<Shape[K]>;
}): ObjectValidator<Shape>;

// @public (undocumented)
class ObjectValidator<Shape extends object> extends Validator<Shape> {
    constructor(config: {
        readonly [K in keyof Shape]: Validator<Shape[K]>;
    }, shouldAllowUnknownProperties?: boolean);
    // (undocumented)
    allowUnknownProperties(): ObjectValidator<Shape>;
    // (undocumented)
    readonly config: {
        readonly [K in keyof Shape]: Validator<Shape[K]>;
    };
    extend<Extension extends Record<string, unknown>>(extension: {
        readonly [K in keyof Extension]: Validator<Extension[K]>;
    }): ObjectValidator<Shape & Extension>;
}

// @public (undocumented)
const point: ObjectValidator<{
    x: number;
    y: number;
    z: number | undefined;
}>;

// @public
const positiveInteger: Validator<number>;

// @public
const positiveNumber: Validator<number>;

// @public (undocumented)
function setEnum<T>(values: ReadonlySet<T>): Validator<T>;

// @public
const string: Validator<string>;

declare namespace T {
    export {
        literal,
        arrayOf,
        object,
        dict,
        union,
        model,
        setEnum,
        ValidatorFn,
        ValidationError,
        TypeOf,
        Validator,
        ArrayOfValidator,
        ObjectValidator,
        UnionValidator,
        DictValidator,
        unknown,
        any,
        string,
        number,
        positiveNumber,
        nonZeroNumber,
        integer,
        positiveInteger,
        nonZeroInteger,
        boolean,
        bigint,
        array,
        unknownObject,
        point,
        boxModel
    }
}
export { T }

// @public (undocumented)
type TypeOf<V extends Validator<unknown>> = V extends Validator<infer T> ? T : never;

// @public
function union<Key extends string, Config extends UnionValidatorConfig<Key, Config>>(key: Key, config: Config): UnionValidator<Key, Config>;

// @public (undocumented)
class UnionValidator<Key extends string, Config extends UnionValidatorConfig<Key, Config>, UnknownValue = never> extends Validator<TypeOf<Config[keyof Config]> | UnknownValue> {
    constructor(key: Key, config: Config, unknownValueValidation: (value: object, variant: string) => UnknownValue);
    // (undocumented)
    validateUnknownVariants<Unknown>(unknownValueValidation: (value: object, variant: string) => Unknown): UnionValidator<Key, Config, Unknown>;
}

// @public
const unknown: Validator<unknown>;

// @public (undocumented)
const unknownObject: Validator<Record<string, unknown>>;

// @public (undocumented)
class ValidationError extends Error {
    constructor(rawMessage: string, path?: ReadonlyArray<number | string>);
    // (undocumented)
    name: string;
    // (undocumented)
    readonly path: ReadonlyArray<number | string>;
    // (undocumented)
    readonly rawMessage: string;
}

// @public (undocumented)
class Validator<T> {
    constructor(validationFn: ValidatorFn<T>);
    check(name: string, checkFn: (value: T) => void): Validator<T>;
    // (undocumented)
    check(checkFn: (value: T) => void): Validator<T>;
    nullable(): Validator<null | T>;
    optional(): Validator<T | undefined>;
    refine<U>(otherValidationFn: (value: T) => U): Validator<U>;
    validate(value: unknown): T;
    // (undocumented)
    readonly validationFn: ValidatorFn<T>;
}

// @public (undocumented)
type ValidatorFn<T> = (value: unknown) => T;

// (No @packageDocumentation comment for this package)

```
