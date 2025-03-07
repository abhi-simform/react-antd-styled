import { Typography } from 'antd'
import { Input, FormItem, Form, InputPassword, Button } from '@/components/Ant'

export default function Signin() {
  return (
    <div>
      <Typography.Title>Signin</Typography.Title>
      <Typography.Paragraph>
        Don’t have an account?{' '}
        <Button type="link" href="/auth/signup">
          Sign Up
        </Button>
      </Typography.Paragraph>
      <Form layout="vertical">
        <FormItem label="Email" required>
          <Input placeholder="input placeholder" />
        </FormItem>
        <FormItem label="Password" required>
          <InputPassword placeholder="input placeholder" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}
