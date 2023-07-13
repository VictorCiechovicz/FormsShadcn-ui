import { Separator } from '@/components/ui/separator'
import { AccountForm } from '@/app/account-form'

export default function SettingsAccountPage() {
  return (
    <div className=" container flex flex-col items-center gap-4 space-y-6 pt-6 pb-6 md:pb-12 md:pt-10 lg-py-32 ">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
