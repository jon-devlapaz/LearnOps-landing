import sys
import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

faq_new = '''<FAQItem
              q="When will I get access?"
              a="We are currently in private beta and slowly rolling out access to ensure the system scales. Join the waitlist, and we'll send you an invite as soon as a spot opens up."
            />
            <FAQItem
              q="How much will it cost?"
              a="Pricing is not finalized, but early access members will receive a guaranteed founding member discount."
            />'''

content = re.sub(
    r'<FAQItem\s+q="When will my card be charged?".*?q="How do I cancel?".*?/>',
    lambda _: faq_new,
    content,
    flags=re.DOTALL
)

content = content.replace(
    '<span className="flex items-center gap-1"><Shield size={12} /> Not charged until launch</span>',
    '<span className="flex items-center gap-1"><Shield size={12} /> No spam guarantee</span>'
)
content = content.replace(
    '<span className="flex items-center gap-1"><X size={12} /> Cancel in one click</span>',
    '<span className="flex items-center gap-1"><Target size={12} /> Limited beta seats</span>'
)

content = content.replace(
    '<span className="cursor-pointer hover:text-slate-400 transition-colors">Cancellation Policy</span>',
    '<span className="cursor-pointer hover:text-slate-400 transition-colors">Privacy Policy</span>'
)

legal_new = 'This landing page is part of our private beta waitlist campaign. We respect your inbox and will only contact you regarding your waitlist status and official LearnOps launch updates.'
content = re.sub(
    r'LearnOps pre-order:.*?effective 2026\)\.',
    lambda _: legal_new,
    content,
    flags=re.DOTALL
)

with open('src/App.jsx', 'w') as f:
    f.write(content)
print("Successfully replaced pricing content.")
