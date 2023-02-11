import { zodResolver } from '@hookform/resolvers/zod'
import { PaperPlaneRight } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as zod from 'zod'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { TextField } from '../components/TextField'
import { ToastContext } from '../contexts/ToastContext'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'
import { sendMessage } from '../services/axios/requests/telegramAPI'

export const Contact = () => {
  const { newToast } = useContext(ToastContext)
  const { t } = useTranslation()

  const ContactFormSchema = zod.object({
    name: zod.string().min(2, { message: t('contact_name_field_error')! }),
    email: zod.string().email({ message: t('contact_email_field_error')! }),
    message: zod
      .string()
      .min(2, { message: t('contact_message_field_error')! }),
  })

  type ContactFormFormData = zod.infer<typeof ContactFormSchema>

  const ContactForm = useForm<ContactFormFormData>({
    resolver: zodResolver(ContactFormSchema),
  })

  const { formState, register, handleSubmit, reset } = ContactForm
  const { errors } = formState

  const handleContactSubmit = async ({
    name,
    email,
    message,
  }: ContactFormFormData) => {
    const sentMessage = await sendMessage(`
    Contact form:
    *At:* ${Date.now()}
    *Name:* ${name}
    *Email:* ${email}
    *Message:* ${message}
  `)

    if (sentMessage) {
      newToast({
        heading: t('contact_success_toast_heading')!,
        message: t('contact_success_toast_message'),
        variant: 'SUCCESS',
      })

      return reset()
    }

    newToast({
      heading: t('contact_error_toast_heading')!,
      message: t('contact_error_toast_message'),
      variant: 'ERROR',
    })
  }

  return (
    <BasePage heading={t('contact_heading')!}>
      <BaseSection heading="Get in touch with me" srHeading>
        <p>{t('p1_contact')}</p>
        <div className="my-auto">
          <form
            onSubmit={handleSubmit(handleContactSubmit)}
            className="flex flex-col items-center gap-2 sm:max-w-xs"
          >
            <InputField
              label={t('contact_form_name')}
              register={register('name', { required: true })}
              errorMessage={errors.name && errors.name.message}
            />
            <InputField
              label={t('contact_form_email')}
              register={register('email', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />
            <TextField
              label={t('contact_form_message')}
              register={register('message', { required: true })}
              errorMessage={errors.message && errors.message.message}
            />
            <Button
              label={t('contact_form_submit')}
              type="submit"
              className="mt-3 w-full justify-center"
              icon={<PaperPlaneRight weight="bold" />}
            />
          </form>
        </div>
      </BaseSection>
    </BasePage>
  )
}
