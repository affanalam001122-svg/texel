'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = 'DTUFugnIaOgtcjprL'
const EMAILJS_SERVICE_ID = 'service_u294nq8'
const EMAILJS_TEMPLATE_ID = 'template_ach8w3n'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmissionMessage('')

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      time: new Date().toLocaleString(),
      message: values.message,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setSubmissionMessage('Thank you for your message! We will get back to you soon.')
      form.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmissionMessage('Sorry, something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Name" {...form.register('name')} />
      {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
      <Input placeholder="Email" {...form.register('email')} />
      {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
      <Textarea placeholder="Message" {...form.register('message')} />
      {form.formState.errors.message && <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
      {submissionMessage && <p className={`${submissionMessage.includes('Sorry') ? 'text-red-500' : 'text-green-500'} text-sm`}>{submissionMessage}</p>}
    </form>
  )
}
