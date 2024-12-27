import type { HTMLInputTypeAttribute } from 'react'
import type { SomeZodObject } from 'zod'
import { cn } from '~/lib'
import { RemixForm } from '~/modules/remix-forms/form'
import { ChildrenProp } from '~/types'
import { Button } from './button'

export type CustomFormField = {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
}

type CustomFormProps = {
  schema: SomeZodObject
  fields: CustomFormField[]
  buttonClass?: string
  buttonText?: string
  values?: any
  children?: ChildrenProp
}

export const CustomForm = ({
  schema,
  fields,
  buttonClass,
  buttonText = 'OK',
  values,
  children,
}: CustomFormProps) => (
  <RemixForm values={values} className="flex flex-col" schema={schema}>
    {({ Field, Errors, register }) => (
      <>
        {fields.map((field) => (
          <Field className="mb-4" key={field.name} {...field}>
            {({ Label, Errors }) => (
              <>
                <Label className="block text-sm font-medium text-gray-700" />
                <input
                  {...register(field.name)}
                  onFocus={(event) =>
                    field.type === 'date' && event.target.showPicker()
                  }
                  className="h-8 mt-1 w-full border block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <Errors className="text-red-500 font-bold text-sm antialiased" />
              </>
            )}
          </Field>
        ))}

        <Errors className="text-red-500 font-bold text-sm antialiased mb-4" />
        <div className="flex gap-4">
          <Button className={cn('w-full', buttonClass)}>{buttonText}</Button>
          {children}
        </div>
      </>
    )}
  </RemixForm>
)
