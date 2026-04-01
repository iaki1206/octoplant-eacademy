/**
 * Octoplant e-Academy – Full-Text Deep Search
 * Searches ALL content: steps, tips, warnings, tables, captions, callouts.
 * Highlights matched terms in results and shows section-level context.
 */

// ─── SEARCH INDEX ────────────────────────────────────────────────────────────
// This index is built from every paragraph, step, tip, warning, table cell,
// figure caption, and callout box across all 15 chapters.
// It is embedded here so the search works with zero server-side code.

const SEARCH_INDEX = [
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "What You Will Learn",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "Create Structure",
    "content": "Add directories in the Project tree"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "Create Component",
    "content": "Right-click → New component"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "Copy Data",
    "content": "Paste project files into component"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "Base Version",
    "content": "Create the initial version"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "SECTION",
    "heading": "Check-In",
    "content": "Upload to server archive"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "STEP",
    "heading": "Step 1: Create the Project Structure",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "STEP",
    "heading": "Step 2: Create a New Component",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "STEP",
    "heading": "Step 3: Copy Project Data into the Component",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "STEP",
    "heading": "Step 4: Create a Base Version",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "STEP",
    "heading": "Step 5: Check-In to the Server",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "INFO",
    "heading": "Best Practice",
    "content": "💡 Best Practice Plan your directory structure before creating it in Octoplant. A logical hierarchy (e.g., Plant → Line → Machine → Component) makes it much easier to locate assets and assign access rights later."
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "INFO",
    "heading": "Tip from the Tutorial",
    "content": "ℹ️ Tip from the Tutorial You can also use example data to test the process. The video demonstrates copying a sample STEP 7 project into the newly created component to verify the workflow before using real production data."
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "WARNING",
    "heading": "Important",
    "content": "⚠️ Important The base version must be created before the Check-In step. Without a base version, Octoplant cannot establish a reference point for future comparisons. The base version cannot be deleted from the server once it has been checked in."
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "INFO",
    "heading": "Result",
    "content": "✅ Result After a successful Check-In, the component is stored in the server archive. Even if you delete the local copy, the component will still appear in the Project tree (shown in gray) and can be retrieved at any time by any authorized user using the Check-Out function."
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": "1 | Create directory structure | Project tree → Right-click → New directory | Logical folder hierarchy created"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": "2 | Create component | Project tree → Right-click → New component | Empty component container created"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": "3 | Copy project data | Windows Explorer → Paste into component folder | Project files inside component"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": "4 | Create base version | Home tab → Create base version | Initial version snapshot recorded"
  },
  {
    "file": "ch01-asset-creation.html",
    "chapter": "Ch. 1 Manual Asset Creation",
    "level": "Beginner",
    "type": "Summary",
    "heading": "Summary",
    "content": "5 | Check-In to server | Home tab → Check-In | Component securely stored on server"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "Check-Out",
    "content": "Copy component from server to local"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "Lock",
    "content": "Prevent conflicts from other users"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "Edit",
    "content": "Modify in engineering editor"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "Compare",
    "content": "Review differences before versioning"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "New Version",
    "content": "Create version with comments"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "SECTION",
    "heading": "Check-In",
    "content": "Upload new version to server"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "STEP",
    "heading": "Step 1: Check-Out the Component",
    "content": ""
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "STEP",
    "heading": "Step 2: Edit the Component",
    "content": ""
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "STEP",
    "heading": "Step 3: Create a New Version and Check-In",
    "content": ""
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "WARNING",
    "heading": "Lock Recommendation",
    "content": "⚠️ Lock Recommendation Always lock the component when you intend to make changes. This avoids version conflicts in team environments."
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "INFO",
    "heading": "Visual Indicator",
    "content": "💡 Visual Indicator After saving changes in the editor, a pencil icon appears next to the component in the Project tree, indicating that the local version differs from the server version."
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "WARNING",
    "heading": "Mandatory Comments",
    "content": "⚠️ Mandatory Comments Your administrator may configure change comments as mandatory. In this case, you cannot proceed without entering a comment. Always write meaningful comments — they are the primary documentation of your changes."
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Check-Out | Home tab → Check-Out | Component available locally"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Lock Component | Check-Out dialog → Lock for other users | Other users cannot check in"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Edit in Editor | Home tab → Open with editor (F4) | Changes saved locally"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create New Version | Home tab → Create new version | Differences reviewed and documented"
  },
  {
    "file": "ch02-lifecycle.html",
    "chapter": "Ch. 2 Lifecycle Change Process",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Check-In | Create version dialog → Create version and Check-In | New version on server, component unlocked"
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "SECTION",
    "heading": "Accessing the Change History",
    "content": ""
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "SECTION",
    "heading": "Checking Out Specific Versions",
    "content": ""
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "SECTION",
    "heading": "Viewing Modified Elements",
    "content": ""
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "SECTION",
    "heading": "Viewing Component Details and Master Data",
    "content": ""
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "INFO",
    "heading": "Working Directory",
    "content": "ℹ️ Working Directory Only the most recent checked-out version is placed in the working directory (the folder you can edit). Older versions are stored in the local archive for reference and comparison only."
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Access Change History | Select component → Change history tab | Full version list displayed"
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Customize Columns | Right-click column header → Select columns | Relevant data visible"
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "Check Out Specific Version | Home tab → Check-Out → Select version | Historical version available locally"
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "View Modified Elements | Change history → Select version | Exact changes per version shown"
  },
  {
    "file": "ch03-change-history.html",
    "chapter": "Ch. 3 Change History",
    "level": "Core",
    "type": "Summary",
    "heading": "Summary",
    "content": "View Master Data | Details tab | Component metadata and ID visible"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Opening User Management in the AdminClient",
    "content": ""
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Creating a New Group",
    "content": ""
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Creating a New User",
    "content": ""
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Assigning Access Rights to Groups",
    "content": ""
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "INFO",
    "heading": "Best Practice",
    "content": "💡 Best Practice Create groups that reflect your organizational structure or job roles. Assign rights to groups, then add users to groups. This way, when a user changes roles, you only need to change their group membership."
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "WARNING",
    "heading": "Superadministrator",
    "content": "⚠️ Superadministrator The built-in Superadministrator account and the Administrators group cannot be deleted. Be careful when modifying their rights, as this could lock you out of the system."
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Open User Management | AdminClient → User Management | User and group list visible"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Group | New group button → Enter name | Group created for role-based access"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create User | New user button → Fill details | User account created"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Assign to Group | User properties → Add to group | User inherits group rights"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Set Project Rights | Group → Project tree rights | Access to specific components defined"
  },
  {
    "file": "ch04-user-management.html",
    "chapter": "Ch. 4 User Management",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Set Module Rights | Group → Module rights | Feature access configured"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "INFO",
    "heading": "Prerequisite: Create and Check-In a Component",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Creating a Job in the AdminClient",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Configuring the Job",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Configuring the Schedule",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Configuring Save and Compare Policies",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Configuring Email Notifications",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "INFO",
    "heading": "Note",
    "content": "ℹ️ Note For some component types (e.g., Image Service), you can create a job without pre-existing project data. For Siemens S7 and similar types, project data must be present."
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "INFO",
    "heading": "Alternative",
    "content": "💡 Alternative You can also click the Create button in the Jobs view and then manually select the component. The drag-and-drop method is faster."
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "WARNING",
    "heading": "Prerequisite",
    "content": "⚠️ Prerequisite Email addresses must be configured for each user in the User Management module before they can receive job notifications."
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Component | UserClient → New component → Check-In | Component available for job assignment"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Job | AdminClient → Jobs → Drag component | Job created for component"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Configure Job | Job settings → Name, Upload type, IP address | Job parameters defined"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Set Schedule | Schedule field → Choose frequency and time | Automatic execution time set"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Save Policy | Always save backup | Backup created on every execution"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Compare Policy | Server version ↔ Backup + Prev. backup ↔ Backup | Differences detected automatically"
  },
  {
    "file": "ch05-create-jobs.html",
    "chapter": "Ch. 5 Create Jobs – Automated Backup",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Email Notifications | Global job settings → Select users | Automatic reports sent after execution"
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Manually Triggering a Job",
    "content": ""
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Reading Job Results",
    "content": ""
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Comparing Server Version with Backup",
    "content": ""
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Understanding Email Reports",
    "content": ""
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "WARNING",
    "heading": "Not Present Warning",
    "content": "⚠️ Not Present Warning If a previous backup was unavailable for comparison (e.g., first run), you will see a 'Not present, with warning' status. This is normal for the first execution."
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Manual Trigger | Jobs tab → Execute jobs once | Job runs immediately"
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Monitor Progress | Show progress information button | Real-time execution status"
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Read Results | Jobs tab → Job history table | Equal / Different status per component"
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Compare Differences | Right-click result → Compare server version with backup | Detailed difference tree"
  },
  {
    "file": "ch06-job-trigger.html",
    "chapter": "Ch. 6 Job Trigger & Verification",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Email Report | Automated email with CSV attachment | Full job summary for all components"
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "SECTION",
    "heading": "Scenario A: Restoring a Server Version from a Backup",
    "content": ""
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "SECTION",
    "heading": "Scenario B: Comparing Two Consecutive Backups",
    "content": ""
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "SECTION",
    "heading": "Scenario C: Restoring a Program Directly to a Physical Device",
    "content": ""
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "INFO",
    "heading": "Critical Warning",
    "content": "🚫 Critical Warning Ensure you are loading the correct version to the correct device. Loading the wrong program to a production device can cause equipment damage or safety incidents. Always verify the component name, version date, and device IP address before proceeding."
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": "Identify Difference | Jobs tab → Server version ↔ Backup column | Mismatch detected"
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": "Copy Backup to Directory | Right-click backup → Copy backup to directory | Working directory updated with backup"
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Recovery Version | Create new version → Add recovery comment | Recovery documented in history"
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": "Check-In Recovery | Create version and Check-In | Server version updated"
  },
  {
    "file": "ch07-recovery.html",
    "chapter": "Ch. 7 Recovery & Restore",
    "level": "Critical",
    "type": "Summary",
    "heading": "Summary",
    "content": "Restore to Device | Open with editor → Load to device | Physical device program restored"
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Logging into the Octoplant Hub",
    "content": ""
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Navigating the User Menu",
    "content": ""
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Selecting Servers for Dashboard Views",
    "content": ""
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Exporting Dashboard Data to CSV",
    "content": ""
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "INFO",
    "heading": "Export Limit",
    "content": "ℹ️ Export Limit A maximum of 50,000 entries can be written to a single CSV file. If the table has more entries, use filters to narrow down the data before exporting."
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Login | Browser → Hub URL → Enter credentials | Dashboard accessible"
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "User Menu | User icon (top-right) | Account settings and logout"
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "Server Selection | Dashboard → Server selection dropdown | Filtered view per server"
  },
  {
    "file": "ch08-hub-dashboard.html",
    "chapter": "Ch. 8 Octoplant Hub & Dashboard",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "CSV Export | Table → CSV Export button | Data downloaded to CSV file"
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "SECTION",
    "heading": "Triggering Asset Identification via Check-In",
    "content": ""
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "SECTION",
    "heading": "Accessing the Asset Inventory Dashboard",
    "content": ""
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "INFO",
    "heading": "Viewing Device Information",
    "content": ""
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "SECTION",
    "heading": "Reading Vulnerability Reports",
    "content": ""
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "INFO",
    "heading": "CVE Information",
    "content": "ℹ️ CVE Information CVE data is sourced from the National Vulnerability Database (NVD). Octoplant matches your device's firmware version against known CVEs to identify potential security risks."
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "Summary",
    "heading": "Summary",
    "content": "Trigger Identification | Check-In component with project data | CPU configuration registered"
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "Summary",
    "heading": "Summary",
    "content": "Access Dashboard | Hub → Asset Inventory Service | All assets listed with risk levels"
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "Summary",
    "heading": "Summary",
    "content": "View Device Info | Click asset → Device Information | Full hardware and network profile"
  },
  {
    "file": "ch09-asset-inventory.html",
    "chapter": "Ch. 9 Asset Inventory Service",
    "level": "Security",
    "type": "Summary",
    "heading": "Summary",
    "content": "Read CVE Report | Click risk level → Insights section | Specific vulnerabilities listed"
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Download the CSV Template",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Fill in the CSV Template",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Import the CSV File",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Updating Existing Assets",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Default Job Configurations",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "INFO",
    "heading": "Mandatory Fields",
    "content": "🚫 Mandatory Fields If any of the three mandatory columns (Name, Directory, Component type) are missing or incorrect for any row, the import will fail for that asset. Double-check all entries before importing."
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Download Template | Extras → Easy Asset Integrator → Download template | CSV template saved"
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Fill Template | Excel → Fill Name, Directory, Component type | Asset data prepared"
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Import CSV | Easy Asset Integrator → Import CSV | Components created in Project tree"
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Update Assets | Delete 'Imported' status → Re-import | Existing assets updated"
  },
  {
    "file": "ch10-easy-asset-integrator.html",
    "chapter": "Ch. 10 Easy Asset Integrator",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Review Jobs | AdminClient → Jobs | Default jobs assigned to new components"
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Supplier Check-Out: Exporting the Project",
    "content": ""
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "SmartImport: Re-Importing Supplier Changes",
    "content": ""
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "INFO",
    "heading": "Critical File",
    "content": "🚫 Critical File The SupplierDeliveryNote.vdog-sdn file is required for the SmartImport process. If the supplier deletes it, the re-import cannot be completed. Instruct your supplier to keep all files intact."
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Supplier Check-Out | Home tab → Check-Out → Enable Supplier Check-Out | Project package exported with delivery note"
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Lock Component | Check-Out dialog → Lock for other users | Concurrent changes prevented"
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Supplier Works | Supplier edits files and fills in change documents | Modified project returned"
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "SmartImport | Home tab → SmartImport for supplier projects → Add directory | Changes imported and compared"
  },
  {
    "file": "ch11-supplier-workflow.html",
    "chapter": "Ch. 11 Supplier Workflow",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Version | SmartImport → Create versions and Check-In | Supplier changes versioned on server"
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Method 1: Exporting via the ExportModule",
    "content": ""
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Method 2: Exporting from the Octoplant Hub",
    "content": ""
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Choosing the Right Method",
    "content": ""
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "INFO",
    "heading": "Automation",
    "content": "💡 Automation The ExportModule command can be added to a Windows Task Scheduler job or a batch script to run automatically on a schedule, enabling fully automated reporting."
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "ExportModule | Command line with parameter file | CSV, XML, or JSON output"
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Hub Export | Dashboard → CSV Export button | CSV output from dashboard data"
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "ExportModule Formats | CSV, XML, JSON | Flexible for system integration"
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Hub Export Formats | CSV only | Simple, browser-based"
  },
  {
    "file": "ch12-export.html",
    "chapter": "Ch. 12 Manual & Automatic Export",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Automation | ExportModule via Task Scheduler | Scheduled automatic exports"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Configuring the AD Connection",
    "content": ""
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Importing Users from Active Directory",
    "content": ""
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "SECTION",
    "heading": "Setting Authorization Policies",
    "content": ""
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "WARNING",
    "heading": "Connection Test",
    "content": "⚠️ Connection Test Always perform the connection test before attempting a user import. A failed test indicates incorrect settings (wrong IP, port, or credentials) that must be corrected first."
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Open Synchronization | AdminClient → User Management → Synchronization | AD configuration interface"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Enter AD Settings | IP, port, credentials, root paths | Connection parameters configured"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Test Connection | Test connection button | Successful AD communication confirmed"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Manual Import | Manual import button | AD users imported into Octoplant"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Auto Import | Configure automatic daily import | Users synchronized daily"
  },
  {
    "file": "ch13-active-directory.html",
    "chapter": "Ch. 13 Active Directory Integration",
    "level": "Admin",
    "type": "Summary",
    "heading": "Summary",
    "content": "Auth Policy | User properties → Authorization policy | Domain login enabled"
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Creating a Library Component",
    "content": ""
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Linking Projects to the Library",
    "content": ""
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Understanding Inconsistency Indicators",
    "content": ""
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "INFO",
    "heading": "Maintaining Consistency",
    "content": "💡 Maintaining Consistency Regularly check the Library Management view to identify and resolve inconsistencies. This ensures all projects use the latest, approved versions of shared code blocks."
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Create Library | New component → Library type → Check-In | Central library available on server"
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Link Projects | Component properties → Assign standard library | Projects linked to library"
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Yellow Dot | Library block updated | Project copy is outdated"
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Grey Dot | Library block deleted | Project has orphaned block"
  },
  {
    "file": "ch14-library-management.html",
    "chapter": "Ch. 14 Library Management",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Red Dot | Project block modified independently | Divergence from library standard"
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Preparing Script Files",
    "content": ""
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Configuring Scripts in the AdminClient",
    "content": ""
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Configuring Script Triggers",
    "content": ""
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "SECTION",
    "heading": "Creating a Custom Button",
    "content": ""
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": ""
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "INFO",
    "heading": "Online Help",
    "content": "💡 Online Help For more scripting examples and advanced usage, navigate to Help → Online help in the UserClient or AdminClient. The documentation includes sample scripts for common automation scenarios."
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Prepare Files | .script + .exe + .ini files | Script package ready"
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Register in AdminClient | Script management → Copy files to directory | Script registered in Octoplant"
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Enable Scripting | Scripting settings → Enable globally | Scripting functionality active"
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Set Trigger | Script config → Before Edit event | Script runs on specified event"
  },
  {
    "file": "ch15-scripting.html",
    "chapter": "Ch. 15 Scripting",
    "level": "Advanced",
    "type": "Summary",
    "heading": "Summary",
    "content": "Custom Button | Extras tab → Custom button | Manual script execution available"
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "1. Objective and Purpose",
    "content": "For many components of our production systems, we create backups that are archived in our central backup management tool (Octoplant). The primary purpose of this process is to ensure regular training of the recovery procedure and to verify that the available backups are functional and can be successfully restored in an emergency. ℹ️ Scope of Application This procedure applies initially only to the"
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "2. Preparation of the Recovery Tests",
    "content": "The recovery tests are intended to ensure that, in the event of a disruption—for example, a PLC failure—we can quickly restore the system to an operational state. The goal is not to pose a sustained risk to production or cause major downtime, as this would contradict the very purpose of the backup strategy."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "2.1 Personnel Requirements",
    "content": "The personnel performing the recovery tests must possess the necessary qualifications to carry out the tests. They must also be familiar with troubleshooting the respective components and have experience operating the associated machines."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "2.2 Component Requirements",
    "content": "Recovery tests should only be performed on components for which spare parts are available on-site in the event of a defect. Furthermore, the site must have full access permissions. For example, in the case of a Siemens PLC, any general or safety passwords must be known and available to the personnel conducting the test."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "2.3 Machine Availability Requirements",
    "content": "A time window of at least two hours must be planned for performing the recovery tests, even though the process will typically take significantly less time. In practice, this means that tests should only be conducted during maintenance shifts or sufficiently long planned system downtimes."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "3. Execution of the Recovery Tests",
    "content": "The execution depends heavily on the specific component and therefore cannot be defined in detail for all components. Based on the personnel requirements defined above, the general procedure should already be known to the employee performing the test. It is important that different types of components (e.g., S7‑300, S7‑1500, frequency converters from various systems) are tested regularly to ensure"
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "Create a Live Backup First",
    "content": ""
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "SECTION",
    "heading": "4. Documentation in SAP",
    "content": "The execution of the recovery test must be documented thoroughly. The documentation must include: Date of the test Name of the person performing the test Specific component tested Backup version used Any anomalies or issues encountered For this purpose, a monthly maintenance order must be created in SAP by the site, through which the documentation is completed. The maintenance order must be create"
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary: OT Backup Test Workflow",
    "content": "Phase Action Requirements / Details 1. Preparation Schedule test window Minimum 2 hours during maintenance shift or planned downtime. 2. Verification Check prerequisites Qualified personnel, spare parts available, full access/passwords known. 3. Safety Create live backup Mandatory: Create and store a backup of the current live system before proceeding. 4. Execution Perform recovery Restore selecte"
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "INFO",
    "heading": "Scope of Application",
    "content": "ℹ️ Scope of Application This procedure applies initially only to the sites of Dorsten, Hildesheim, and Knetzgau."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "STEP",
    "heading": "Create a Live Backup First",
    "content": "CRITICAL STEP Create a Live Backup First Before beginning any work, a backup must always be created from the live system and stored securely. This ensures that, in case any issues arise during the test, the machine can be restored to its exact previous state immediately."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "WARNING",
    "heading": "Post-Test Verification",
    "content": "⚠️ Post-Test Verification After completing the test, it must be ensured that the component and, if applicable, the machine have been restored to a fully operational state. Furthermore, the startup of the machine or component must be checked once again to verify proper functioning."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "1. Preparation | Schedule test window | Minimum 2 hours during maintenance shift or planned downtime."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "2. Verification | Check prerequisites | Qualified personnel, spare parts available, full access/passwords known."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "3. Safety | Create live backup | Mandatory: Create and store a backup of the current live system before proceeding."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "4. Execution | Perform recovery | Restore selected backup version to the component."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "5. Validation | Verify operation | Ensure component/machine is fully operational and check startup sequence."
  },
  {
    "file": "ch16-ot-backup-tests.html",
    "chapter": "Ch. 16 OT Backup Tests",
    "level": "Operations",
    "type": "Summary",
    "heading": "Summary",
    "content": "6. Documentation | Log in SAP | Record date, name, component, version, and anomalies in the monthly SAP maintenance order."
  }
];

// ─── SEARCH ENGINE ───────────────────────────────────────────────────────────

/**
 * Tokenize a string into lowercase words.
 */
function tokenize(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s\-→]/g, ' ').split(/\s+/).filter(t => t.length > 1);
}

/**
 * Score a search index entry against a query.
 * Returns a score (higher = better match) and matched snippets.
 */
function scoreEntry(entry, queryTokens) {
  const contentLower = entry.content.toLowerCase();
  const sectionLower = entry.section.toLowerCase();
  const titleLower = entry.title.toLowerCase();

  let score = 0;
  let matchedTokens = [];

  for (const token of queryTokens) {
    // Exact word match in section heading → highest weight
    if (sectionLower.includes(token)) {
      score += 10;
      matchedTokens.push(token);
    }
    // Match in chapter title
    if (titleLower.includes(token)) {
      score += 6;
      matchedTokens.push(token);
    }
    // Match in full content
    const count = (contentLower.match(new RegExp(token.replace(/[-→]/g, '\\$&'), 'g')) || []).length;
    if (count > 0) {
      score += count * 2;
      matchedTokens.push(token);
    }
  }

  // Bonus: all tokens matched
  const uniqueMatched = [...new Set(matchedTokens)];
  if (uniqueMatched.length === queryTokens.length && queryTokens.length > 1) {
    score += 15;
  }

  return { score, matchedTokens: uniqueMatched };
}

/**
 * Highlight matched terms in a text snippet.
 */
function highlight(text, tokens) {
  if (!tokens.length) return escapeHtml(text);
  let result = escapeHtml(text);
  for (const token of tokens) {
    const escaped = token.replace(/[-→]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  }
  return result;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Extract a relevant snippet around the first match.
 */
function extractSnippet(content, tokens, maxLen = 200) {
  const lower = content.toLowerCase();
  let bestPos = -1;
  for (const token of tokens) {
    const pos = lower.indexOf(token);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }
  if (bestPos === -1) return content.slice(0, maxLen);
  const start = Math.max(0, bestPos - 60);
  const end = Math.min(content.length, start + maxLen);
  let snippet = content.slice(start, end);
  if (start > 0) snippet = '…' + snippet;
  if (end < content.length) snippet = snippet + '…';
  return snippet;
}

/**
 * Main search function. Returns top results sorted by score.
 */
function performSearch(query, maxResults = 20) {
  if (!query || query.trim().length < 2) return [];

  const queryTokens = tokenize(query);
  if (!queryTokens.length) return [];

  const results = [];

  for (const entry of SEARCH_INDEX) {
    const { score, matchedTokens } = scoreEntry(entry, queryTokens);
    if (score > 0) {
      results.push({ entry, score, matchedTokens });
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  // Deduplicate: keep only best result per chapter+section combo
  const seen = new Set();
  const deduped = [];
  for (const r of results) {
    const key = r.entry.file + '|' + r.entry.section;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(r);
    }
  }

  return deduped.slice(0, maxResults);
}

// ─── UI ──────────────────────────────────────────────────────────────────────

let searchOverlay = null;
let searchInput = null;
let searchDebounce = null;

function initSearch() {
  // Find all search inputs on the page
  const inputs = document.querySelectorAll('#sidebar-search, #global-search, .search-input');
  inputs.forEach(input => {
    searchInput = input;
    input.setAttribute('placeholder', 'Search all content…');
    input.addEventListener('input', onSearchInput);
    input.addEventListener('keydown', onSearchKeydown);
    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) showResults(input.value);
    });
  });

  // Create overlay
  createOverlay();

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (searchOverlay && !searchOverlay.contains(e.target) &&
        !e.target.closest('#sidebar-search, #global-search, .search-input')) {
      hideOverlay();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideOverlay();
  });
}

function createOverlay() {
  searchOverlay = document.createElement('div');
  searchOverlay.id = 'search-overlay';
  searchOverlay.innerHTML = `
    <div id="search-overlay-inner">
      <div id="search-overlay-header">
        <span id="search-result-count"></span>
        <button id="search-close-btn" onclick="hideOverlay()" title="Close search">✕</button>
      </div>
      <div id="search-results-list"></div>
    </div>
  `;
  document.body.appendChild(searchOverlay);
}

function onSearchInput(e) {
  clearTimeout(searchDebounce);
  const q = e.target.value.trim();
  if (q.length < 2) {
    hideOverlay();
    return;
  }
  searchDebounce = setTimeout(() => showResults(q), 180);
}

function onSearchKeydown(e) {
  if (!searchOverlay || searchOverlay.style.display === 'none') return;
  const items = searchOverlay.querySelectorAll('.search-result-item');
  const active = searchOverlay.querySelector('.search-result-item.active');
  let idx = active ? Array.from(items).indexOf(active) : -1;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (active) active.classList.remove('active');
    idx = Math.min(idx + 1, items.length - 1);
    items[idx]?.classList.add('active');
    items[idx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (active) active.classList.remove('active');
    idx = Math.max(idx - 1, 0);
    items[idx]?.classList.add('active');
    items[idx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const activeItem = searchOverlay.querySelector('.search-result-item.active');
    if (activeItem) {
      const link = activeItem.querySelector('a');
      if (link) window.location.href = link.href;
    }
  }
}

function showResults(query) {
  const results = performSearch(query);
  const list = document.getElementById('search-results-list');
  const countEl = document.getElementById('search-result-count');
  const queryTokens = tokenize(query);

  if (!results.length) {
    list.innerHTML = `<div class="search-no-results">
      <div class="search-no-icon">🔍</div>
      <div>No results found for <strong>"${escapeHtml(query)}"</strong></div>
      <div class="search-no-hint">Try different keywords or check spelling</div>
    </div>`;
    countEl.textContent = '0 results';
  } else {
    countEl.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;
    list.innerHTML = results.map((r, i) => {
      const { entry, matchedTokens } = r;
      const snippet = extractSnippet(entry.content, matchedTokens, 220);
      const highlightedSnippet = highlight(snippet, matchedTokens);
      const highlightedSection = highlight(entry.section, matchedTokens);
      const url = entry.anchor
        ? `${entry.file}#${entry.anchor}`
        : entry.file;
      const tagBadges = entry.tags.map(t =>
        `<span class="search-tag search-tag-${t}">${t}</span>`
      ).join('');
      return `
        <div class="search-result-item${i === 0 ? ' active' : ''}" data-url="${url}">
          <a href="${url}" class="search-result-link">
            <div class="search-result-meta">
              <span class="search-ch-badge">Ch. ${entry.chapter}</span>
              <span class="search-chapter-title">${escapeHtml(entry.title)}</span>
              <span class="search-level-badge search-level-${entry.level.toLowerCase().replace(/\s+/g,'-')}">${entry.level}</span>
              ${tagBadges}
            </div>
            <div class="search-result-section">${highlightedSection}</div>
            <div class="search-result-snippet">${highlightedSnippet}</div>
          </a>
        </div>`;
    }).join('');

    // Click anywhere on result row
    list.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const link = item.querySelector('a');
        if (link) window.location.href = link.href;
      });
    });
  }

  // Position overlay below search input
  positionOverlay();
  searchOverlay.style.display = 'block';
}

function positionOverlay() {
  if (!searchInput) return;
  const rect = searchInput.getBoundingClientRect();
  const overlay = searchOverlay;

  // On mobile/small screens: full width
  if (window.innerWidth < 768) {
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.top = (rect.bottom + window.scrollY + 4) + 'px';
  } else {
    // Position near the sidebar search
    overlay.style.left = rect.left + 'px';
    overlay.style.width = Math.max(420, rect.width) + 'px';
    overlay.style.top = (rect.bottom + window.scrollY + 4) + 'px';
  }
}

function hideOverlay() {
  if (searchOverlay) searchOverlay.style.display = 'none';
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}
