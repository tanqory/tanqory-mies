# Error Handling Text

Error messages are critical moments in user experience. Clear, helpful error text turns frustration into resolution.

## Error Message Principles

### Be Human and Helpful
- **Acknowledge the problem** - "We couldn't process your payment"
- **Explain what happened** - "Your card was declined by the bank"
- **Provide next steps** - "Try a different payment method or contact your bank"

### Use Plain Language
- **Avoid technical codes** - "Invalid input" → "Please enter a valid email address"
- **No blame language** - "You entered invalid data" → "This field is required"
- **Clear, specific descriptions** - "Error occurred" → "Connection timed out"

### Keep It Actionable
- **Focus on solutions** - What can the user do right now?
- **Provide alternatives** - If one path fails, suggest another
- **Link to help** - When complex issues arise, offer additional support

## Error Types and Patterns

### Validation Errors
**Field-level feedback for forms**

✅ **Good**: "Email address is required"
❌ **Avoid**: "Field cannot be empty"

✅ **Good**: "Password must be at least 8 characters"
❌ **Avoid**: "Invalid password format"

### System Errors
**When something goes wrong on our end**

✅ **Good**: "We're having trouble loading your dashboard. Please try refreshing the page."
❌ **Avoid**: "Error 500: Internal server error"

✅ **Good**: "Your changes couldn't be saved. Check your internet connection and try again."
❌ **Avoid**: "Save failed"

### Permission Errors
**When users can't access something**

✅ **Good**: "You don't have permission to edit this project. Contact your team admin to request access."
❌ **Avoid**: "Access denied"

### Network Errors
**Connection and loading issues**

✅ **Good**: "Couldn't connect to the internet. Check your connection and try again."
❌ **Avoid**: "Network timeout"

## Error Message Structure

### The Formula
1. **What happened** - Brief, clear description
2. **Why it happened** - Context when helpful
3. **What to do next** - Specific actions

### Example Breakdown
```
"We couldn't send your message because the email address isn't valid. 
Please check the address and try again, or use a different email."

• What: Message couldn't be sent
• Why: Invalid email address  
• Next: Check address or use different email
```

## Tone Guidelines

### Strike the Right Balance
- **Apologetic but not overly dramatic** - "We're sorry" not "We deeply apologize"
- **Confident in solutions** - "Try this" not "Maybe try this"
- **Honest about limitations** - Don't promise what you can't deliver

### Context-Specific Tone
- **Critical errors**: More formal, clear urgency
- **Minor validation**: Friendly, encouraging
- **User mistakes**: Neutral, educational
- **System failures**: Apologetic, proactive

## Error Prevention

### Help Users Succeed
- **Clear expectations upfront** - Show format requirements before errors
- **Real-time validation** - Catch errors as users type
- **Smart defaults** - Reduce error opportunities
- **Progressive disclosure** - Don't overwhelm with options

### Examples in Context

**Form validation:**
```
Instead of: "Error: Invalid format"
Use: "Please enter your phone number like this: (555) 123-4567"
```

**Upload errors:**
```
Instead of: "File upload failed"
Use: "This file is too large. Please choose a file smaller than 10MB."
```

**Login errors:**
```
Instead of: "Authentication failed"
Use: "Email or password is incorrect. Check your details and try again."
```

## Recovery and Support

### Offer Multiple Paths
- **Immediate retry** - For temporary issues
- **Alternative methods** - Different ways to accomplish the goal
- **Human help** - Contact support when needed
- **Documentation links** - For complex procedures

### Track and Improve
- **Monitor error frequency** - Which errors happen most?
- **Test error scenarios** - Do users understand and recover?
- **Gather feedback** - How can error experiences improve?

Good error handling text transforms moments of failure into opportunities to build user confidence and trust.